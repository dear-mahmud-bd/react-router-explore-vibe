/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { CiStar } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    
    const { bookId, image, tags, bookName, author, category, rating } = book;

    const navigate = useNavigate();
    const handleBookDetails = (bookId) => {
        // console.log("clicked", bookId);
        navigate(`/all-books/${bookId}`); 
    };

    return (
        <div onClick={()=>handleBookDetails(bookId)} className="card bg-base-100 border">
            <figure className="p-10 bg-gray-200 mx-8 mt-8 rounded-xl">
                <img src={image} alt="Shoes" className="rounded-md h-60" />
            </figure>
            <div className="card-body">
                <div className="flex gap-4">
                    <span className="px-4 py-1 bg-green-100 rounded-full text-customGreen">{tags[0]}</span>
                    <span className="px-4 py-1 bg-green-100 rounded-full text-customGreen">{tags[1]}</span>
                </div>
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p className='mb-2 pb-2 border-b-2 border-dashed font-semibold text-gray-600'>By : {author}</p>
                <div className="flex items-center justify-between font-semibold">
                    <span className="text-lg text-gray-500">{category}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-lg">{rating}</span>
                        <CiStar className='text-2xl'></CiStar>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;