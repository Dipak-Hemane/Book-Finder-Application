import React from "react";

const BookCard = ({book}) => {
    return (
        <div className="flex flex-col md:flex-row items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                   src={book.volumeInfo.imageLinks.thumbnail}
                   alt={book.volumeInfo.title}
                   className="w-32 h-auto mr-4"
                />   
            )}
            <div>
                <h3 className="text-lg font-bold">{book.volumeInfo.title}</h3>
                <p className="text-sm text-gray-600">
                    Author: {book.volumeInfo.authors?.join(',') || 'N/A'}
                </p>
            </div>
        </div>
    );
};

export default BookCard;