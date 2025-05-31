import "./main.css";
import { useNavigate } from "react-router-dom";
import food1 from "../../assets/pictures/food-1.png";
import food2 from "../../assets/pictures/food-2.png";
import food3 from "../../assets/pictures/food-3.png";

function TopMain() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <article>
      <section className="include-section">
        <div className="left-img">
          <div className="left-img-content">
            <h1>Özel Lezzetus</h1>
            <p>Position:Absolute Acı Burger</p>
            <button onClick={handleOrderClick} style={{ color: "red" }}>
              Sipariş VER
            </button>
          </div>
        </div>
        <div className="right-img">
          <div className="top-img">
            <div className="top-img-content">
              <h2>Hackathlon</h2>
              <h2>Burger Menü</h2>
              <button onClick={handleOrderClick} style={{ color: "red" }}>
                Sipariş VER
              </button>
            </div>
          </div>
          <div className="bottom-img">
            <div className="bottom-img-content">
              <p>
                <span className="span" style={{ color: "#ce2829" }}>
                  Çoooook
                </span>{" "}
                hızlı npm gibi kurye
              </p>
              <button onClick={handleOrderClick} style={{ color: "red" }}>
                Sipariş VER
              </button>
            </div>
          </div>
        </div>
      </section>

      <h1 className="thick">en çok paketlenen menüler</h1>
      <h1 className="khick">Acıktıran Kodlara Doyuran Lezzetler</h1>

      <nav className="nav-items nav">
        <a href="">Ramen </a>
        <a href="" style={{ backgroundColor: "#292929", color: "#faf7f2" }}>
          Pizza
        </a>
        <a href="">Burger</a>
        <a href="">French fries</a>
        <a href="">Fast food</a>
        <a href="">Soft drinks</a>
      </nav>

      <div className="card-container">
        <div className="card" style={{ backgroundImage: `url(${food1})` }}>
          <div className="info">
            <h3>Terminal Pizza</h3>
            <p>
              4.9 &nbsp;&nbsp; (200) &nbsp;&nbsp; <strong>60₺</strong>
            </p>
          </div>
        </div>

        <div className="card" style={{ backgroundImage: `url(${food2})` }}>
          <div className="info">
            <h3>Position Absolute Acı Pizza</h3>
            <p>
              4.9 &nbsp;&nbsp; (200) &nbsp;&nbsp; <strong>60₺</strong>
            </p>
          </div>
        </div>

        <div className="card" style={{ backgroundImage: `url(${food3})` }}>
          <div className="info">
            <h3>useEffect Tavuklu Burger</h3>
            <p>
              4.9 &nbsp;&nbsp; (200) &nbsp;&nbsp; <strong>60₺</strong>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
export default TopMain;
