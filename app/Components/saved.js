// Include React 
var React = require('react');

var Saved = React.createClass({

	render: function(){

		return(
			<div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-newspaper-o"></i> Saved Articles</div>
                    <div className="panel-body">
                            <label>Saved:</label>

                    </div>
            </div> 
		)
	}
});


module.exports = Saved;