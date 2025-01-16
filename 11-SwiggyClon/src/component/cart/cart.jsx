import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItems } from "../../reducer/cartSlice";
import "../../style/cart.css";
import { toggleCart } from "../../reducer/cartSlice";
import { IoIosCloseCircle } from "react-icons/io";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div>
        <div className="my-cart-header">
          <h1>My-cart</h1>
          <span onClick={() => dispatch(toggleCart())} className="cart-close">
            <IoIosCloseCircle />
          </span>
        </div>

        <div className="my-cart">
          {(cartItems || []).map((detail) => {
            return (
              <div key={detail.id}>
                <p>{detail.name}</p>
                <button onClick={() => dispatch(deleteItems(detail.id))}>
                  Del
                </button>
              </div>
            );
          })}
        </div>

        <button onClick={() => dispatch(clearCart())}className="clear-cart">Clear Cart</button>
      </div>
    </div>
  );
};
