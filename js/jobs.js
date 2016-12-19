var React = require('react');

const Jobs = React.createClass({

    handleClick() {
        
    },

    render() {
        return(
            <div className="section">
            	<div className="container">
            		<center>
                        <img className="responsive-img" src="img/jobs.png" />
                    </center>
                    <div className="section">
                    	<center style={{fontFamily: 'Gotham Book'}}>
                    		<h5 style={{fontFamily: 'Gotham Medium'}}>We are looking for the following positions:</h5>
                    		<p>Senior Copywriter</p>
                    		<p>Brand Ambassadors</p>
                    		<p>Project Assistants</p>
                    		<p>Product Samplers</p>
                    	</center>
                    </div>
            	</div>
            </div>
        )
    }
});

module.exports = Jobs;