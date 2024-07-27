import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { HiShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import ShoppingCart from './cart/ShoppingCart';
import Books from './Books';

const Dashboard = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  const onQuantityChange = (
    productId,
    count
  ) => {
    setProductsInCart((oldState) => {
      const productIndex = 
      oldState.findIndex(
        (item) =>
          item.id === productId
        );
        if (productIndex !== -1) {
          oldState[productIndex].count = count;
        }
        return [...oldState];
      })
  }

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    })
  }

  return (
    <div className='w-full min-h-full'>
      {/* Shopping Cart Component */}
      {cartVisible && (
        <ShoppingCart 
          visibility={cartVisible}
          products={productsInCart}
          onClose={() => setCartVisible(false)}
          onQuantityChange={onQuantityChange} 
          onProductRemove={onProductRemove}
        />
      )}
      {/* Navbar */}
      <div className="mx-auto min-h-[100px] overflow-hidden bg-green-600 flex flex-row items-center px-4 py-2">
        <div className="flex-grow flex items-center gap-4">
          <Link className='flex items-center gap-3 m-0 px-4' to={'/'}>
            <img className='h-[100px] w-[100px] object-cover' src={Logo} alt="logo" />
            <h1 className='text-white uppercase text-2xl font-extrabold hover:text-gray-700'>Novelnest Bookstore</h1>
          </Link>
        </div>
        <button 
          className="flex items-center gap-4" 
          onClick={() => setCartVisible(true)}
        >
          <HiShoppingCart className='text-white text-3xl hover:text-yellow-300'/>
          {productsInCart.length > 0 && <span className='product-count'>
            {
              productsInCart.length
            }
            </span>}
        </button>
      </div>

      {/* Banner */}
      <div className="w-full h-[500px] sm:h-[400px] books-banner flex flex-col items-center justify-center gap-5 px-5">
        <h1 className='text-white uppercase font-extrabold text-2xl'>Search For Your Book</h1>
        <p className='text-white'>We have in stock all the books you can think of! Just type the name and we will find it for you in a matter of seconds.</p>
        <div className="md:w-[35rem] md:h-[3rem] bg-white flex items-center justify-center gap-5 px-10 py-3.5 rounded-xl">
          <input className='w-[90%] py-3 outline-none font-semibold' type="search" placeholder='Enter book name' />
          <button type='submit' className='flex items-center px-4 py-1'>
            <FiSearch className='text-blue-800 cursor-pointer' />
          </button>
        </div>
      </div>

      {/* Books Section */}
      <div className="w-full h-auto">
        <Books setProductsInCart={setProductsInCart} />
      </div>
    </div>
  );
};

export default Dashboard;