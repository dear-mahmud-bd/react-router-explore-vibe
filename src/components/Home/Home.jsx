/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImg from '../../assets/banner.png'
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-3xl mb-10">
                <div className="hero-content flex-col md:flex-row-reverse p-10 md:p-20">
                    <img src={bannerImg} className="max-w-lg rounded-lg h-[400px]" />
                    <div className='space-y-10'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="text-xl font-bold px-8 py-4 bg-customGreen rounded-lg text-white hover:bg-green-600">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-center text-4xl font-bold'>Books</h1>
            </div>
            <div className='mt-5'>
                <Books count={6}></Books>
            </div>
        </div>
    );
};

export default Home;