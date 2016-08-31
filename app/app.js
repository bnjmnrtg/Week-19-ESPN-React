// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Header Component
var Header = require('./Components/Header.js')
var Saved = require('./Components/Saved.js')
var Search = require('./Components/Search.js')
var Result = require('./Components/Result.js')


ReactDOM.render(


	<div className='main-container'>

		<Header />
		<Search />
		<Result />
		<Saved />


	</div>,
	document.getElementById('app')
)