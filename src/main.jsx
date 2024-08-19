/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx';
import Books from './components/Books/Books.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/Books/BookDetails/BookDetails.jsx';
import axios from 'axios';
import NotFound from './components/Shared/NotFound/NotFound.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';

// React Router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/all-books",
        element: <Books count={12}></Books>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/all-books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: async () => {
          try {
            const res = await axios.get('/books.json');
            return res.data;
          } catch (error) {
            throw new Response('Failed to load data', { status: error.response?.status || 500 });
          }
        }
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
