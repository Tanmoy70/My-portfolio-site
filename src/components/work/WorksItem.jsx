export default function WorksItem({ item }) {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a href={item.link} target="_blank" className="work_button">
        See Now <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
}
