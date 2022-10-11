import "./Main.scss";
import { data } from "../../helper/data";

const Main = () => {
  //   console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <img src={item.image} alt={item.title} />
            <div className="card-over">
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Main;
