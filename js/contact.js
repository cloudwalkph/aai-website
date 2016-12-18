var React = require('react');

const Contact = React.createClass({

    handleClick() {
        
    },

    render() {
        return(
            <div className="section">
            	<div className="container">
            		<center>
                        <img className="responsive-img" src="img/contactUs.png" />
                    </center>
                    <div className="section">
                        <p style={{textAlign : 'center'}}>
                        	<i className="material-icons dp48" style={{verticalAlign: 'bottom'}}>my_location</i>&nbsp;
                        	115 Kasing-Kasing corner K-16th St. <br/> Brgy. East Kamias, Quezon City
                        </p> 
                        <p style={{textAlign : 'center'}}>
                        	<i className="material-icons dp48" style={{verticalAlign: 'bottom'}}>phone</i>&nbsp;
                        	435-6566 / 435-4535 / 433-7790 / 434-6583
                        </p>
                        <p style={{textAlign : 'center'}}>
                        	<i className="material-icons dp48" style={{verticalAlign: 'bottom'}}>email</i>&nbsp;
                        	info@activationsadvertising.com
                        </p>
                    </div>
            	</div>
            </div>
        )
    }
});

module.exports = Contact;