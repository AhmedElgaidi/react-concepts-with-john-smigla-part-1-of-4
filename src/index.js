// this file is our entry point

import React from 'react';
import ReactDom from 'react-dom';

// components
import Book from './Book';

// CSS
import './index.css';

// some data (array of objects)
import { books } from './data';


const BookList = () => {
  return (
    <div className='booklist'>
      {
        // if we don't have to iterate over our data (array) and filter values and so on we coul use
        // index in map() instead of id/something uniue to each element.

        // { ...book } is short for books={ ...book } => spread operator, so we can destructure this object there in any need component
        books.map(book => {
          return <Book key={ book.id } { ...book }/>
        })
      }
    </div>
  );
};



ReactDom.render(<BookList/>, document.getElementById('root'))