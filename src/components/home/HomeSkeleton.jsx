import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeSkeleton() {
  return (
    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e0e0e0">
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            {/* Left Social Icons - 116px width column */}
            <div className="home_social">
              <Skeleton 
                circle 
                width={20} 
                height={20} 
                style={{ marginBottom: '1rem' }}
              />
              <Skeleton 
                circle 
                width={20} 
                height={20} 
                style={{ marginBottom: '1rem' }}
              />
              <Skeleton 
                circle 
                width={20} 
                height={20} 
              />
            </div>

            {/* Center Content - First 1fr column */}
            <div className="home_data">
              {/* Name - home_title */}
              <Skeleton 
                height={60} 
                width="85%" 
                style={{ 
                  marginBottom: 'var(--mb-0-25)',
                  maxWidth: '350px'
                }} 
              />
              
              {/* Title with line - home_subtitle */}
              <div style={{ 
                position: 'relative', 
                marginBottom: 'var(--mb-1)',
                paddingLeft: '5.7rem'
              }}>
                {/* The line before subtitle */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.2rem',
                  width: '70px',
                  height: '1px',
                  backgroundColor: '#d0d0d0'
                }}></div>
                <Skeleton height={28} width="200px" />
              </div>
              
              {/* Description - home_description */}
              <div style={{ 
                minWidth: '400px', 
                marginBottom: 'var(--mb-3)' 
              }}>
                <Skeleton height={18} width="100%" style={{ marginBottom: '0.5rem' }} />
                <Skeleton height={18} width="90%" style={{ marginBottom: '0.5rem' }} />
                <Skeleton height={18} width="80%" />
              </div>
              
              {/* Button */}
              <Skeleton 
                height={50} 
                width={140} 
                style={{ 
                  borderRadius: '0.5rem'
                }} 
              />
            </div>

            {/* Right Profile Image - Second 1fr column with responsive behavior */}
            <div className="home_img_skeleton">
              {/* Desktop blob skeleton */}
              <div className="desktop_skeleton" style={{
                width: '300px',
                height: '300px',
                marginLeft: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 0 9px rgba(255, 255, 255, 0.3)',
                  backgroundColor: '#f0f0f0'
                }}>
                  <Skeleton 
                    width="100%" 
                    height="100%" 
                    style={{
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>

              {/* Mobile blob skeleton */}
              <div className="mobile_skeleton" style={{
                width: '200px',
                height: '200px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginLeft: '-40px'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 0 6px rgba(255, 255, 255, 0.3)',
                  backgroundColor: '#f0f0f0'
                }}>
                  <Skeleton 
                    width="100%" 
                    height="100%" 
                    style={{
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down - home_scroll */}
          <div className="home_scoll" style={{ marginLeft: '9.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Skeleton height={16} width={80} className="home_scroll-name" />
              <Skeleton 
                circle 
                width={20} 
                height={20} 
                style={{ 
                  marginLeft: 'var(--mb-0-25)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom responsive styles */}
      <style jsx>{`
        /* Desktop view - show desktop skeleton, hide mobile */
        .desktop_skeleton {
          display: flex !important;
        }
        .mobile_skeleton {
          display: none !important;
        }

        /* Large devices */
        @media screen and (max-width: 992px) {
          .desktop_skeleton {
            width: 230px !important;
            height: 190px !important;
            margin-left: -15px !important;
          }
          .desktop_skeleton > div {
            width: 250px !important;
            height: 250px !important;
            box-shadow: inset 0 0 0 8px rgba(255, 255, 255, 0.3) !important;
          }
        }

        /* Mobile view - hide desktop skeleton, show mobile */
        @media screen and (max-width: 768px) {
          .home_content {
            grid-template-columns: 35px 1fr 1fr !important;
            padding-top: 3.5rem !important;
            align-items: start !important;
            
          }
          
          .home_data {
            grid-column: 1/3 !important;
            order: 2 !important;
          }
          
          .desktop_skeleton {
            display: none !important;
          }

          .home_social{
            padding-top: 2rem !important;
          }
          
          .mobile_skeleton {
            display: flex !important;
            order: 1 !important;
            justify-self: center !important;
            margin-right: 50px !important;
            margin-top: 0 !important;
            grid-column: 1/2 !important;
            grid-row: 1 !important;
          }

          .home_scoll {
            display: none !important;
          }

          /* Adjust other elements for mobile */
          .home_data > div:first-child {
            max-width: 280px !important;
          }
          
          .home_data > div:nth-child(2) {
            padding-left: 3.75rem !important;
          }
          
          .home_data > div:nth-child(2) > div {
            width: 42px !important;
            top: 1rem !important;
          }
          
          .home_data > div:nth-child(3) {
            min-width: initial !important;
          }
        }

        @media screen and (max-width: 550px) {
          .mobile_skeleton {
            margin-left: 0 !important;
            justify-self: center !important;
            grid-column: 1/3 !important;
            margin-bottom: 2rem !important;
          }
        }

        @media screen and (max-width: 350px) {
          .mobile_skeleton {
            width: 180px !important;
            height: 180px !important;
            margin-left: 0 !important;
            justify-self: center !important;
            grid-column: 1/3 !important;
            margin-bottom: 2rem !important;
          }
          
          .mobile_skeleton > div {
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}</style>
    </SkeletonTheme>
  );
}