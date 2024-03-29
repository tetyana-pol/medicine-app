import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import { CardCart } from "../components/CardCart";
import { authService } from "../services/authService";

export const CartPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const { cart } = useContext(CartContext);
  const { addOrder } = authService;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addOrder({
      ...formData,
      drugs: cart.map((item) => ({ idDrug: item.id, count: item.count })),
    });

    setFormData((prevData) => ({
      ...prevData,
      name: "",
      email: "",
      phone: null,
      adress: "",
    }));
  };

  const totalPrice = () => {
    return cart.reduce((total, { price, count }) => total + price * count, 0);
  };

  return (
    <div className="container">
      <div className="user">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Adress</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="adress"
                value={formData.adress}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="button is-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="drugs">
        {cart.map((el) => (
          <CardCart key={el.id} card={el} />
        ))}
        <div>Total price: {totalPrice()}</div>
      </div>
    </div>
  );
};
