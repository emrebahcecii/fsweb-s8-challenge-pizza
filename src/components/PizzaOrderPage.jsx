import "./pizzaOrderPage.css";
import Headertop from "./headertop/headertop";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PizzaOrderPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const [count, setCount] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const BASE_PRICE = 85.5;
  const INGREDIENT_PRICE = 5;

  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== value)
      );
    }
  };

  const ingredientCost = selectedIngredients.length * INGREDIENT_PRICE * count;
  const totalCost = BASE_PRICE * count + ingredientCost;

  return (
    <>
      <Headertop />

      <div className="order-wrapper">
        <main className="order-container">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="rating">
            <strong>85.50₺</strong>
            <span>4.9 (200)</span>
          </div>
          <p className="desc">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Vel nemo quis quaerat labore dolore ducimus est ab
            possimus iusto. Suscipit dolores maiores delectus reiciendis
            blanditiis debitis quasi laboriosam molestias dolorum!
          </p>

          <form>
            <div className="their">
              <div className="form-group ">
                <label>Boyut Seç</label>
                <div className="options">
                  <label>
                    <input type="radio" name="size" /> Küçük
                  </label>
                  <label>
                    <input type="radio" name="size" /> Orta
                  </label>
                  <label>
                    <input type="radio" name="size" /> Büyük
                  </label>
                </div>
              </div>

              <div className="form-group hamur">
                <label>Hamur Seç</label>
                <select>
                  <option value="">Hamur Kalınlığı</option>
                  <option value="">İnce</option>
                  <option value="">Normal</option>
                  <option value="">Kalın</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="bold">Ek Malzemeler</label>
              <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="checkbox-group">
                {[
                  "Pepperoni",
                  "Sosis",
                  "Kanada Jambonu",
                  "Tavuk Izgara",
                  "Soğan",
                  "Domates",
                  "Mısır",
                  "Sucuk",
                  "Jalepeno",
                  "Sarımsak",
                  "Biber",
                  "Sucuk",
                  "Ananas",
                  "Kabak",
                ].map((malzeme, idx) => (
                  <label key={idx}>
                    <input
                      value={malzeme}
                      onChange={handleIngredientChange}
                      type="checkbox"
                    />
                    {malzeme}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="bold">Sipariş Notu</label>
              <textarea
                rows={4}
                cols={75}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </div>

            <div className="form-bottom">
              <div className="quantity">
                <button type="button" onClick={decrement}>
                  -
                </button>
                <span>{count}</span>
                <button type="button" onClick={increment}>
                  +
                </button>
              </div>

              <div className="summary">
                <p>
                  Seçimler: <span>{ingredientCost.toFixed(2)}₺</span>
                </p>
                <p>
                  Toplam: <span>{totalCost.toFixed(2)}</span>
                </p>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="submit-btn"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default PizzaOrderPage;
