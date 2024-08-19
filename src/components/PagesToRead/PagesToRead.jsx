/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import useFetchBooks from '../utility/useFetchBooks';
import { getMatchedBooks } from '../utility/useLocalStorage';


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = ({ fill = '#8884d8', x = 0, y = 0, width = 0, height = 0 }) => {
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {

    const { data: books, loading, error } = useFetchBooks('books.json');
    console.log(books);

    const readBooks = getMatchedBooks(books, "Read");

    // const storedReadBookIds = getStoredBookIds("Read");
    // console.log(storedReadBookIds);
    // useEffect(() => {
    //     if (books && books.length > 0) {
    //         const matchedBooks = [];

    //         storedReadBookIds.forEach(bookId => {
    //             const book = books.find(book => book.bookId === bookId);
    //             if (book) {
    //                 matchedBooks.push(book);
    //             }
    //         });

    //         setReadBooks(matchedBooks);
    //     }
    // }, [books]);

    console.log(readBooks);





    const getColor = (rating) => {
        if (rating >= 4.7) return '#00C49F';
        if (rating >= 4.5) return '#59C6D2';
        if (rating >= 4.3) return '#FFBB28';
        return '#F44336';
    };

    if (loading) {
        return <div className='flex items-center justify-center h-96'><span className="loading loading-dots loading-lg"></span></div>;
    }
    return (
        <div className='space-y-4'>
            {readBooks.length > 0 &&
                <div className='bg-gray-100 px-2 pt-4 pb-1 rounded-lg'>
                    <div style={{ width: '100%', height: 500 }}>
                        <ResponsiveContainer>
                            <BarChart
                                data={readBooks}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="bookName" />
                                <Tooltip />
                                <YAxis dataKey="totalPages" />
                                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {readBooks.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={getColor(entry.rating)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <h1 className='text-3xl font-bold text-center mb-10'>Statistics of Books Read</h1>
                </div>
            }
            <div className='bg-gray-100 px-2 pt-4 pb-1 rounded-lg'>
                <div style={{ width: '100%', height: 500 }}>
                    <ResponsiveContainer>
                        <BarChart
                            data={books}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="bookName" />
                            <Tooltip />
                            <YAxis dataKey="totalPages" />
                            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {books.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={getColor(entry.rating)} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <h1 className='text-3xl font-semibold text-center mb-10'>All Books Statistics</h1>
            </div>
        </div>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
}

export default PagesToRead;


