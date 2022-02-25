import React from 'react';


const Book = ({ title, image, author }) => {  // let's destructure book object in props object
    const clickHandler = () => {
      console.log('you click the button!');
    };
    const clickHandler2 = (e, author) => {
      console.log(e.target.type, author);
    }
    return (
      <div className='book'>
        <img src={ image } alt="book" />
        <h1>{ title }</h1>
        <h4>By: { author.toUpperCase() }</h4>
        <button 
          type='button'
          onClick={ clickHandler }
          >
            click me
        </button><br/>
        <button 
          type='button'
          onClick={ e => clickHandler2(e, author) }
          >
            show author "ID"
        </button>
      </div>
    );
  };
 
export default Book;