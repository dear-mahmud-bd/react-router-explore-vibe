/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId === bookId);
    console.log(book, bookId);

    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row">
                    <figure className="p-10 bg-gray-100 rounded-lg w-full md:w-1/2 flex justify-center">
                        <img src={image} className="rounded-lg shadow-2xl h-80 mmd:h-[400px] md:h-[500px]" />
                    </figure>
                    <div className=' md:w-1/2'>
                        <h2 className="text-4xl font-bold mb-2">{bookName}</h2>
                        <p className="text-gray-700 font-semibold mb-2">By : {author}</p>
                        <p className="font-semibold text-gray-600 py-3 my-3 border-y">{category}</p>
                        <p className="text-gray-700 text-sm mb-4">
                            <span className='font-bold text-black'>Review :</span> {review}
                        </p>
                        <div className="flex gap-4 mb-4 pb-4 border-b">
                            <span className="font-bold">Tag</span>
                            <span className="px-4 py-1 bg-green-100 rounded-full text-customGreen">#{tags[0]}</span>
                            <span className="px-4 py-1 bg-green-100 rounded-full text-customGreen">#{tags[1]}</span>
                        </div>
                        <div className=" flex gap-3 mb-4">
                            <div className='md:mr-5 text-gray-600'>
                                <p>Number of Pages: </p>
                                <p>Publisher: </p>
                                <p>Year of Publishing: </p>
                                <p>Rating: </p>
                            </div>
                            <div className='font-bold text-gray-700'>
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating }</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <button className="btn btn-outline border-gray-400 hover:bg-customGreen hover:border-customGreen font-semibold">Read</button>
                            <button className="btn bg-customBlue hover:bg-blue-400 text-white font-semibold">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;