import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItems } from "../../reducer/cartSlice";
import "../../style/cart.css"
import { toggleCart } from "../../reducer/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "70px" }} className="cart-container">
      <h1>cart</h1>
      <button onClick={()=>dispatch(toggleCart())}>❌</button>
      {(cartItems || []).map((detail) => {
        return (
          <div key={detail.id}>
            <h3>{detail.name}</h3>
            <button onClick={() => dispatch(deleteItems(detail.id))}>
              Del
            </button>
          </div>
        );
      })}
      <button onClick={() => dispatch(clearCart())}>ClearCart</button>
    </div>
  );
};
