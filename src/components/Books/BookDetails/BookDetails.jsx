/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredBookIds, saveBookId } from '../../utility/useLocalStorage';
import { toast } from 'react-toastify';

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId === bookId);
    console.log(book, bookId);

    if (!book) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold text-red-600">Book Not Found</h1>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sorry, the book you are looking for does not exist.</p>
            </div>
        );
    }

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;







    const handleButtonClick = (params) => {
        const storedBookIds = getStoredBookIds(params);
        const isBookSaved = storedBookIds.includes(bookId);
        console.log(isBookSaved);
        if (params === 'read') {
            if (isBookSaved) {
                toast.error('Already Added in Read', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                saveBookId(bookId, params);
                toast.success('Added to Read', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            const storedReadBookIds = getStoredBookIds("read");
            const isBookRead = storedReadBookIds.includes(bookId);
            if (isBookRead) {
                toast.error('Already Added in Read', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                if (isBookSaved) {
                    toast.error('Already Added in Wishlist', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    saveBookId(bookId, params);
                    toast.success('Added to Wishlist', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
        }
        // console.log(storedBookIds);
    };
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
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <button onClick={() => handleButtonClick("read")} className="btn btn-outline border-gray-400 hover:bg-customGreen hover:border-customGreen font-semibold">Read</button>
                            <button onClick={() => handleButtonClick("wishlist")} className="btn bg-customBlue hover:bg-blue-400 text-white font-semibold">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;