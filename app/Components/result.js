// Include React 
var React = require('react');

var Result = React.createClass({

	render: function(){

		return(
			<div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-newspaper-o"></i> Article Results</div>
                    <div className="panel-body">
                    <label>Result:</label>
                    </div>
            </div> 
		)
	}
});


module.exports = Result;