import React from 'react';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProductIdVarList } from '../../../redux/features/checkout';

const Cart = ({ cart, total,  }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleBuyNow = () => {
    let temp = [];
    cart.forEach(e => {
      temp.push({productId:e.product_id,variantName: e.variant_name})
    })
    dispatch(setProductIdVarList(temp))
    navigate("/checkout");
  }
  return (
    <div className="flex flex-col sm:gap-20 md:flex-row text-black">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {cart.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0 text-black">
        <div className="bg-white p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-lg font-semibold">${total}</span>
          </div>
          <button onClick={() => handleBuyNow()} className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
