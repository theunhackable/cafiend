import React from "react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  handleCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Cart = ({handleCart}: Props) => {
  return (
    <button onClick={handleCart}>
      <div className="p-3 relative">
        <p className="absolute text-xsm top-0 right-0 bg-dark text-white text-center p-0.5 rounded-full w-5 h-5">
          9+
        </p>
        <FaShoppingCart type='button' size={25} />
      </div>
    </button>
  );
};

export default Cart;
