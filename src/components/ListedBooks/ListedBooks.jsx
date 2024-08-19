/* eslint-disable no-unused-vars */
import React from 'react';
import ListedBook from './ListedBook/ListedBook';
import { getMatchedBooks } from '../utility/useLocalStorage';
import useFetchBooks from '../utility/useFetchBooks';

const ListedBooks = () => {

    const { data: books, loading } = useFetchBooks('books.json');

    const readBooks = getMatchedBooks(books, "Read");
    const wishlistBooks = getMatchedBooks(books, "Wishlist");

    console.log(readBooks);
    return (
        <div>
            <div className='my-1 py-5 bg-gray-200 rounded-lg'>
                <h1 className='text-center text-4xl font-bold'>Books</h1>
            </div>

            <div className='my-10 flex justify-center'>
                <select className="select select-bordered w-full max-w-xs bg-customGreen font-bold text-white border-0">
                    <option disabled defaultValue>Sort By</option>
                    <option className='bg-gray-200 text-black'>Default</option>
                    <option className='bg-gray-200 text-black'>Rating</option>
                    <option className='bg-gray-200 text-black'>Number of Pages</option>
                    <option className='bg-gray-200 text-black'>Publisher Year</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted border-l-0">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-b-0 border-x-0 border-base-300 p-1">
                    {
                        readBooks.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
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