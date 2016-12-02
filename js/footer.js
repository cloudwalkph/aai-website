var React = require('react');

const Footer = React.createClass({

    handleClick() {
        
    },

    render() {
        return(
            <footer className="page-footer white">
                <div className="footer-copyright white">
                    <div className="container">
                        <center className="grey-text text-darken-1">
                            <span>Copyright © 2016 Activations Advertising Inc. All rights reserved.</span>
                            <span>facebook</span>
                            <span>instagram</span>
                            <span>twitter</span>
                            <span>youtube</span>
                        </center>
                    </div>
                </div>
            </footer>
        )
    }
});

module.exports = Footer;