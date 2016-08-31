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
                                <div className="input-group col-md-12">
                                    <input type="text" className="  search-query form-control" placeholder="Topic" />
                                </div>
                                <br></br>
                                <div className="input-group col-md-12">
                                    <input type="text" className="  search-query form-control" placeholder="Star Year" />
                                </div>
                                <br></br>
                                <div className="input-group col-md-12">
                                    <input type="text" className="  search-query form-control" placeholder="End Year" />
                                </div>
                            </div>
                            <br></br>
                            <button class="btn btn-primary" type="button">
                                <i class="fa fa-search"></i> Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
			


		)
	}
});

// Export the componen back for use in other files
module.exports = Search;