/* eslint-disable react/prop-types */
// src/Books.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loading } from './Loading';

const Books = ({ setProductsInCart }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const addProductToCart = (product) => {
    setProductsInCart((prevProducts) => [
      ...prevProducts,
      { ...product, count: 1 },
    ]);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/love.json?limit=20');
        setBooks(response.data.works);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className='text-center pt-10 font-extrabold'><Loading /></div>;
  if (error) return <div className='text-center text-2xl text-red-600 font-semibold mt-11 '>Error 404! <br /> Seems you are offline!</div>;

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pb-5 pt-10 bg-gray-200'>
      {books.map((book) => {
        const coverId = book.cover_id;
        const coverImageUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : 'https://via.placeholder.com/150?text=404+No+Cover';

        const bookId = book.key.replace('/works/', '');

        return (
          <div
            className='relative w-full h-full items-center flex flex-col cursor-pointer group'
            key={book.key}
          >
            <img src={coverImageUrl} alt={book.title} className='w-[150px] h-[200px] rounded-xl object-cover'/>
            <button
              className="absolute h-10 w-28  m-24 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation();
                addProductToCart(book);
              }}
            >
              Add to Cart
            </button>
            <div onClick={() => navigate(`/book/${bookId}`)}>
              <h3 className='text-green-500'>{book.title}</h3>
              <p className='text-black'>Author: {book.authors.map((author) => author.name).join(', ')}</p>
              <p className='text-black'>First Published: {book.first_publish_year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
