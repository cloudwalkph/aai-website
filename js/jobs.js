var React = require('react');

const Jobs = React.createClass({

    render() {
        return(
            <div>

                <div className="screenImageHeight section valign-wrapper">
					<div className="container center-align">
                        <img className="responsive-img" src="img/jobs.png" />
                    </div>
                </div>

            	<div className="section">
                    <div className="container center-align">
                        <h5>We are looking for the following positions:</h5>
                        <center>Senior Copywriter</center>
                        <center>Brand Ambassadors</center>
                        <center>Project Assistants</center>
                        <center>Product Samplers</center>
                    </div>
            	</div>
            </div>
        )
    }
});

module.exports = Jobs;