
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div class="jumbotron m-5">
			<h1 class="display-4">{props.title}</h1>
			<p class="lead">{props.description}</p>
			<a class="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);

	//here you have to return expected html using the properties being passed to the component
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
};


export default Jumbotron;
