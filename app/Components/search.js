// Include React 
var React = require('react');

// Create the Results component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Saved = React.createClass({

	render: function(){

		return(
			<div className="panel panel-default">
                    <div className="panel-heading">Search Parameters</div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Search Term:</label>
                                <div id="custom-search-input">
                                    <div className="input-group col-md-12">
                                        <input type="text" className="  search-query form-control" placeholder="Search" />
                                    </div>
                                </div>
                            </div> 
                        </form>
                    </div>
            </div> 


		)
	}
});

// Export the componen back for use in other files
module.exports = Saved;