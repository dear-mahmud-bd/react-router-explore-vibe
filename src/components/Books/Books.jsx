/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard/BookCard';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Books = ({ count }) => {
    
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get('books.json')
            .then(res => setBooks(res.data))
    }, [])

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    books.slice(0, count).map((book, idx) => <BookCard key={idx} book={book}></BookCard>)
                }
            </div>
            <div className="text-center my-5">
                {count === 6 && <NavLink to="/all-books" className="btn btn-wide bg-customGreen hover:bg-green-600 text-white font-semibold">All Books</NavLink>}
            </div>
        </div>
    );
};

Books.propTypes = {
    count: PropTypes.number
}

export default Books;