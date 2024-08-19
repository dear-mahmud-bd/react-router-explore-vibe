/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { FaRegFileLines } from 'react-icons/fa6';

const ListedBook = ({book}) => {
    const { bookId, image, bookName, author, tags, yearOfPublishing,publisher,totalPages, category, rating } = book;
    return (
        <div>
            <div className="hero-content flex justify-start items-start border rounded-lg my-5">
                <figure className="p-10 bg-gray-200 mr-6 rounded-xl">
                    <img src={image} className="rounded-lg shadow-2xl h-60 w-auto" />
                </figure>
                <div className='space-y-5'>
                    <h2 className="text-xl font-bold mb-2">{bookName}</h2>
                    <p className="text-gray-700 font-semibold mb-2">By : {author}</p>
                    <div className="flex gap-4 mb-4 font-semibold">
                        <span className="text-lg font-bold">Tag</span>
                        <span className="px-4 py-2 bg-green-100 rounded-full text-customGreen">#{tags[0]}</span>
                        <span className="px-4 py-2 bg-green-100 rounded-full text-customGreen">#{tags[1]}</span>
                        <span className="px-4 py-2 flex gap-2 items-center text-gray-500"><FaRegCalendar />Year of Publishing: {yearOfPublishing}</span>
                    </div>
                    <div className="flex gap-4 mb-4 text-gray-600 font-semibold">
                        <span className="px-4 py-2 flex gap-2 items-center"><FiUsers /> Publisher: {publisher}</span>
                        <span className="px-4 py-2 flex gap-2 items-center"><FaRegFileLines /> Page {totalPages}</span>
                    </div>
                    <div className="flex gap-4 border-t pt-5">
                        <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-500">Category: {category}</span>
                        <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-500">Rating: {rating}</span>
                        <span className="px-4 py-2 bg-customGreen rounded-full text-white">View Details</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
}

export default ListedBook;