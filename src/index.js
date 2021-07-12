import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";

function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const Book = () => {
	const title = "Think and Grow Rich";
	const author = "Napoleon Hill";

	return (
		<article className="book">
			<img src="https://m.media-amazon.com/images/I/711RcAn0EiL._AC_UY436_FMwebp_QL65_.jpg" alt="" />;
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));
