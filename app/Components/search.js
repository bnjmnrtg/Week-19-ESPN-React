// Include React 
var React = require('react');

// Create the Results component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Search = React.createClass({

	render: function(){

		return(
            <div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-newspaper-o"></i> Search Parameters</div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Search Term:</label>
                                <div id="custom-search-input">
                                    <div className="input-group col-xs-12">
                                        <input type="text" className="  search-query form-control" placeholder="Search" />
                                    </div>
                                </div>
                                <br></br>
                                <label for="sel1">Number of Records to Retrieve:</label>
                                <select className="form-control" id="sel1">
                                    <option>1</option>
                                    <option>5</option>
                                    <option>10</option>
                                </select>
                                <br></br>
                                <label for="startYear">Start Year (Optional):</label>
                                <input type="text" className="form-control" id="startYear" />
                                <br></br>
                                <label for="endYear">End Year (Optional):</label>
                                <input type="text" className="form-control" id="endYear" />
                            </div>
                        </form>
                    </div>
                </div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Search;