// Include React 
var React = require('react');

var Search = React.createClass({

	render: function(){

		return(
			<div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-newspaper-o"></i> Saved Articles</div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Saved:</label>
                                <div id="saved">

                                </div>
                            </div> 
                        </form>
                    </div>
            </div> 
		)
	}
});


module.exports = Search;