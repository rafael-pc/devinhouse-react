import React from "react";
import Books from "../../components/Books/";
import { useState, useEffect } from "react";

// import { Container } from './styles';

function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function booksApi() {
      const response = await fetch("http://localhost:3333/books");
      const data = await response.json();
      // console.log(data)
      setBook(data);
    }
    booksApi();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {book.map((book, index) => (
          <Books
            key={index}
            image={book.image}
            title={book.title}
            price={book.price}
          ></Books>
        ))}
      </div>
    </div>
  );
}

export default Home;
