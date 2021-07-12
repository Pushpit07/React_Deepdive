import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return jsx
function BookList() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return <img src="https://m.media-amazon.com/images/I/711RcAn0EiL._AC_UY436_FMwebp_QL65_.jpg" alt="" />;
};

const Title = () => {
	return <h1>Think and Grow Rich</h1>;
};

const Author = () => {
	return <h4>Napoleon Hill</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
