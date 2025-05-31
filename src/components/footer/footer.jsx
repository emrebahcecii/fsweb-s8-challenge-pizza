import "./footer.css";
import logo from "../../assets/footer/insta/logo-footer.svg";

function TopFooter() {
  return (
    <footer>
      <div className="footer-content">
        <div className="item-1 con-3">
          <img style={{ width: "200px" }} src={logo} alt="" />
          <ul>
            <li>341 Londonderry Road, Istanbul Türkiye</li>
            <li>aciktim@teknolojikyemekler.com</li>
            <li>+90 216 123 45 67</li>
          </ul>
        </div>
        <div className="item-2 con-3">
          <h2>Hot Menu</h2>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="item-3 con-3">
          <h2>Instagram</h2>
          <div className="photos">
            <img src="./src/assets/footer/insta/li-0.png" alt="" />
            <img src="./src/assets/footer/insta/li-1.png" alt="" />
            <img src="./src/assets/footer/insta/li-2.png" alt="" />
            <img src="./src/assets/footer/insta/li-3.png" alt="" />
            <img src="./src/assets/footer/insta/li-4.png" alt="" />
            <img src="./src/assets/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="foot">
        <p>&copy; 2023 TEKNOLOJİK YEMEKLER</p>
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
}
export default TopFooter;
