import './App.css'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { useState } from 'react';

const App = () => {
        const [books, setBooks] = useState([]);
        const [loading, setLoading] = useState(false);

        const fetchBooks = async (query) => {
          if (!query) return;
          setLoading(true);
          try {
            const response = await axios.get(
               `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
            );
            
            setBooks(response.data.items || []);
          } catch (error) {
            console.error("Error fetching books:", error);
          } finally {
            setLoading(false);
          }
        };

  return (
    
      <div className='min-h-screen bg-gray-300 '>
        <h1 className='p-4 mb-1 font-serif text-center text-3xl font-normal hover:font-medium cursor-pointer tracking-wider'>BookFinder Application</h1>
        <SearchBar onSearch={fetchBooks} />
        {loading ? (
          <p className='text-center text-gray-500'>Loading....</p>
        ) : (
          <BookList books={books} />
        )}
      </div>
    
  );
};

export default App;
