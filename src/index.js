import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// Components
import Book from "./Book";
// Setup vars
import { books } from "./books";

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
}

ReactDOM.render(<BookList />, document.getElementById("root"));
