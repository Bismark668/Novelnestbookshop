// src/BookDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from './Loading';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className='text-center pt-10'><Loading /></div>;
  if (error) return <div className='text-center font-extrabold text-red-600 text-xl'>Error fetching book details</div>;

  const coverId = book.covers ? book.covers[0] : null;
  const coverImageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : 'https://via.placeholder.com/150?text=404+No+Cover';

    const getDescription = (description) => {
      if (!description) return 'No description available';
      const words = description.split(' ');
      if (words.length > 600) {
        return words.slice(0, 600).join(' ') + '...';
      }
      return description;
    };
  
    const descriptionText = book.description
      ? typeof book.description === 'string'
        ? book.description
        : book.description.value
      : 'No description available';


  return (
    <div className='w-full min-h-[100vh] px-2 py-5 bg-gray-200'>
      <button className="py-3 px-4  mb-5 text-xl font-light text-green-900 focus:outline-none bg-none  rounded-xl border border-green-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => navigate(-1)}>&larr; Back to Books</button>
      <div className='w-full h-full grid grid-cols-1 gap-1 sm:grid-cols-2'>
        <div>
          <img src={coverImageUrl} alt={book.title} className='w-full sm:w-[90%] h-[85dvh] object-center  '/>
          <h3 className='text-red-700 text-2xl py-2 font-bold'>{book.title}</h3>
        </div>
        <div className='w-full h-full p-2 flex flex-col items-start gap-2'>
          <p className='text-blue-800 text-xl pb-2'>Author: {book.authors ? book.authors.map((author) => author.name).join(', ') : 'N/A'}</p>
          <p className='text-xl'>{getDescription(descriptionText)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
