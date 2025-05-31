import "./header.css";
import { useNavigate } from "react-router-dom";

function TopHeader() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <div>
      <header className="include-header">
        <div className="main-header">
          <img src="./src/assets/logos/logo.svg" alt="" />
          <div className="content">
            <p>fırsatı kaçırma</p>
            <h1>KOD ACIKTIRIR</h1>
            <h1>PİZZA, DOYURUR</h1>
            <button onClick={handleOrderClick} style={{ color: "white" }}>
              Sipariş VER
            </button>
          </div>
        </div>

        <nav className="nav-items">
          <a href="" className="one">
            YENİ! Kore
          </a>
          <a href="" className="two">
            Pizza
          </a>
          <a href="" className="three">
            Burger
          </a>
          <a href="" className="four">
            Kızartmalar
          </a>
          <a href="" className="five">
            Fast food
          </a>
          <a href="" className="one">
            Gazlı İçecek
          </a>
        </nav>
      </header>
    </div>
  );
}
export default TopHeader;
