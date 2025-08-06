import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const navItems = [
  { href: "#home", icon: "uil-estate", title: "Home" },
  { href: "#about", icon: "uil-user", title: "About" },
  { href: "#skills", icon: "uil-file-alt", title: "Skills" },
  { href: "#certificates", icon: "uil-message", title: "Certificates" },
  { href: "#qualification", icon: "uil-scenery", title: "Qualification" },
  { href: "#portfolio", icon: "uil-scenery", title: "Portfolio" },
  { href: "#contact", icon: "uil-message", title: "Contact" },
];

// Animation variants for the header
const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -50, 
    backdropFilter: "blur(0px)",
    WebkitBackdropFilter: "blur(0px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

// Mobile menu variants
const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Nav item variants for mobile
const mobileItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    scale: 0.8,
    transition: { duration: 0.2 }
  }
};

// Desktop nav variants
const desktopNavVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const desktopItemVariants = {
  hidden: { 
    opacity: 0, 
    y: -10 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function Header() {
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        ShowMenu(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll_header");
      } else {
        header.classList.remove("scroll_header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu item click
  const handleMenuClick = (href) => {
    setActiveNav(href);
    if (isMobile) {
      ShowMenu(false); 
    }
  };

  return (
    <motion.header
      className="header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="nav container">
        {/* Logo with animation */}
        <motion.a 
          href="#home" 
          className="nav_logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tanmoy
        </motion.a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <motion.div className="nav_menu">
            <motion.ul
              className="nav_list grid"
              variants={desktopNavVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li 
                  className="nav_item" 
                  key={item.href}
                  variants={desktopItemVariants}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className={
                      activeNav === item.href
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i 
                      className={`uil ${item.icon} nav_icon`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                    />
                    {item.title}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <motion.div 
            className="nav_toggle" 
            onClick={() => ShowMenu(!Toggle)}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className="uil uil-apps"
              animate={{ rotate: Toggle ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {Toggle && isMobile && (
            <motion.div
              className="nav_menu show-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul className="nav_list grid">
                {navItems.map((item) => (
                  <motion.li 
                    className="nav_item" 
                    key={item.href}
                    variants={mobileItemVariants}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => handleMenuClick(item.href)}
                      className={
                        activeNav === item.href
                          ? "nav_link active-link"
                          : "nav_link"
                      }
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.i 
                        className={`uil ${item.icon} nav_icon`}
                        whileHover={{ scale: 1.2 }}
                      />
                      {item.title}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.i
                className="uil uil-times nav_close"
                onClick={() => ShowMenu(false)}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
