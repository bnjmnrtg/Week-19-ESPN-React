// Include React 
var React = require('react');

// Create the Header component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({

	render: function(){

		return(
			<div className="container">
    			<div className="row">
      				<div className="col-md-12">
    					<div className="jumbotron">
    						<h1><i className="fa fa-newspaper-o"></i> ESPN ARTICLE SEARCH</h1>
    					</div>
    				</div>
    			</div>
    		</div>		
		)
	}
});

// Export the componen back for use in other files
module.exports = Header;