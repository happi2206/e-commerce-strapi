import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  return (
    <div className="absolute z-50 bg-white right-32 p-5 rounded w-2/6">
      <h1>Products in your cart</h1>

      <div className="item">
        <img
          className="w-20"
          src={'https://source.unsplash.com/Fg15LdqpWrs/600x600'}
          alt=""
        />
        <div className="details">
          <h1>item.title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            saepe sint! Laboriosam exercitationem, blanditiis ullam nam, quidem
            autem et similique in vel ducimus non nihil mollitia. Minus esse
            quis corrupti?
          </p>
          <div className="price">quantity</div>
        </div>
        <DeleteOutlinedIcon className="delete" />
      </div>

      <div className="total">
        <span>SUBTOTAL</span>
        <span>2392</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
