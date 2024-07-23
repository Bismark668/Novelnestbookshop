// src/Books.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loading } from './Loading';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  if (error) return <div className='text-center text-2xl text-red-700 font-semibold'>Error fetching books</div>;

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pb-5 pt-10 bg-slate-400'>
      {books.map((book) => {
        const coverId = book.cover_id;
        const coverImageUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : 'https://via.placeholder.com/150?text=404+No+Cover';

        const bookId = book.key.replace('/works/', ''); 

        return (
          <div 
            className='w-full h-full items-center flex flex-col cursor-pointer' 
            key={book.key} 
            onClick={() => navigate(`/book/${bookId}`)}
          >
            <img src={coverImageUrl} alt={book.title} className='w-[150px] h-[200px] rounded-xl'/>
            <h3>{book.title}</h3>
            <p>Author: {book.authors.map((author) => author.name).join(', ')}</p>
            <p>First Published: {book.first_publish_year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
