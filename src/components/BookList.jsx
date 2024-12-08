import React from "react";
import BookCard from "./BookCard";

const BookList = ({books}) => {
    if(books.length === 0) {
        return <p className="text-center text-gray-500">No books found. Try searching for something else!</p>
    }
    else {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) =>(
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        );
    };
};

export default BookList;