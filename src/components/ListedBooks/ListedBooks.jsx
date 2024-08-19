/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ListedBook from './ListedBook/ListedBook';
import { getMatchedBooks } from '../utility/useLocalStorage';
import useFetchBooks from '../utility/useFetchBooks';

const ListedBooks = () => {
    const { data: books } = useFetchBooks('books.json');

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        if (books) {
            setReadBooks(getMatchedBooks(books, "Read"));
            setWishlistBooks(getMatchedBooks(books, "Wishlist"));
        }
    }, [books]);


    const sortBooks = (books, field) => {
        return [...books].sort((a, b) => b[field] - a[field]);
    };
    const setState = (criteria) => {
        setReadBooks(sortBooks(readBooks, criteria));
        setWishlistBooks(sortBooks(wishlistBooks, criteria));
    };
    
    const handleSortChange = (e) => {
        const criteria = e.target.value;
        if (criteria === 'rating') {
            setState(criteria);
        } else if (criteria === 'totalPages') {
            setState(criteria);
        } else if (criteria === 'yearOfPublishing') {
            setState(criteria);
        }
    };

    return (
        <div>
            <div className='my-1 py-5 bg-gray-200 rounded-lg'>
                <h1 className='text-center text-4xl font-bold'>Books</h1>
            </div>

            <div className='my-10 flex justify-center items-center'>
                <select onChange={handleSortChange} className="select select-bordered w-full max-w-xs bg-customGreen font-bold text-white border-0 text-center">
                    <option className='bg-gray-200 text-black' defaultValue>Sort By</option>
                    <option value="rating" className='bg-gray-200 text-black'>Rating</option>
                    <option value="totalPages" className='bg-gray-200 text-black'>Number of Pages</option>
                    <option value="yearOfPublishing" className='bg-gray-200 text-black'>Publisher Year</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted border-l-0">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read_Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-b-0 border-x-0 border-base-300 p-1">
                    {
                        readBooks.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist_Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-b-0 border-x-0 border-base-300 p-1">
                    {
                        wishlistBooks.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
