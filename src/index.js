import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return jsx
function Greeting() {
	return <h4>This is the first component</h4>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
