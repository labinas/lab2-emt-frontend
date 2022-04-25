import React, {useEffect, useState} from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import Categories from "./Components/Categories";
import Books from "./Components/Books"
import BooksService from "./Service/BooksService";
import Navbar from "./Components/Navbar";


function App() {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        BooksService.fetchAllBooks().then((data) => {
            setBooks(data.data);
        });

        BooksService.fetchCategories().then((data) => {
            setCategories(data.data);
        })
    }, []);

  return (
      <div className='App'>
          <Navbar></Navbar>
        <Routes>
            <Route exact path='/books' element={<Books books={books}/>}></Route>
            <Route exact path={'/categories'} element={<Categories categories={categories}/>}></Route>
            <Route exact path='/' element={<Books books={books}/>}></Route>
        </Routes>

      </div>
  );
}

export default App;
