var React = require('react');

const NavBar = React.createClass({

    getDefaultProps() {
        return {
            menuData: [
                {
                    id: 'home',
                    page: 'Home',
                    class: 'waves-effect grey-text text-darken-3'
                },
                {
                    id: 'services',
                    page: 'Services',
                    class: 'waves-effect grey-text text-darken-3 dropdown-button'
                },
                {
                    id: 'news',
                    page: 'News',
                    class: 'waves-effect grey-text text-darken-3'
                },
                {
                    id: 'about',
                    page: 'About',
                    class: 'waves-effect grey-text text-darken-3'
                },
                {
                    id: 'jobs',
                    page: 'Jobs',
                    class: 'waves-effect grey-text text-darken-3'
                },
                {
                    id: 'contact',
                    page: 'Contact',
                    class: 'waves-effect grey-text text-darken-3'
                }
            ],
            servicesData: [
                {
                    id: 'brandActivations',
                    page: 'Brand Activations'
                },
                {
                    id: 'events',
                    page: 'Events'
                },
                {
                    id: 'sampling',
                    page: 'Sampling +'
                },
                {
                    id: 'designAndProduction',
                    page: 'Design And Production'
                },
                {
                    id: 'creativesAndStrategy',
                    page: 'Creatives And Strategy'
                },
                {
                    id: 'tieUpsAndPartnerships',
                    page: 'Tie-ups And Partnerships'
                }
            ]
        }
    },

    getInitialState() {
        return {
            menuData: this.props.menuData,
            servicesData: this.props.servicesData
        }
    },

    componentDidMount () {
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            }
        );
        $(".dropdown-button").dropdown({
            constrain_width: true,
            belowOrigin: true
        });
        $('.collapsible').collapsible({
            accordion: true
        });
    },
    
    selectMenu(page) {
        this.props.getPage(page);
    },

    render() {
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="white z-depth-0">
                        <div className="nav-wrapper container">
                            <a className="brand-logo" onClick={this.selectMenu.bind(this, 'home')}>
                                <img className="responsive-img" src="img/logo.png" />
                            </a>
                            <a data-activates="slide-out" className="button-collapse">
                                <i className="material-icons grey-text text-darken-3">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                { this.state.menuData.map(function(v, i) {
                                    if(v.id === 'services') {
                                        return(
                                            <li key={v.id} className={v.active}>
                                                <a 
                                                    className={v.class}
                                                    onClick={this.selectMenu.bind(this, v.id)}
                                                    data-activates="services-dropdown"
                                                    data-hover="true"
                                                    data-constrainwidth="false"
                                                    data-beloworigin="true"
                                                >{v.page}</a>
                                            </li>
                                        )
                                    } else {
                                        return(
                                            <li key={v.id} className={v.active}>
                                                <a 
                                                    className={v.class} 
                                                    onClick={this.selectMenu.bind(this, v.id)}
                                                >{v.page}</a>
                                            </li>
                                        )
                                    }
                                }.bind(this))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="side-nav" id="slide-out">    
                    <li className="logo">
                        <center>
                            <div className="userView">
                                <a href="#!" className="brand-logo" >
                                    <img className="responsive-img" src="img/logo.png" />
                                </a>
                            </div>
                        </center>
                    </li>
                    { this.state.menuData.map(function(v, i) {
                        if(v.id === 'services') {
                            return(
                                <li key={i} className="no-padding">
                                    <ul className="collapsible collapsible-accordion">
                                        <li>
                                            <a className="collapsible-header">{v.page}<i className="material-icons">arrow_drop_down</i></a>
                                            <div className="collapsible-body">
                                                <ul>
                                                    { this.state.servicesData.map(function(vSd, iSd){
                                                        return(
                                                            <li key={vSd.id}>
                                                                <a href="#!" onClick={this.selectMenu.bind(this, vSd.id)}>{vSd.page}</a>
                                                            </li>
                                                        )
                                                    }.bind(this))}
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            )
                        } else {
                            return(
                                <li key={v.id} className={v.active}>
                                    <a 
                                        className="waves-effect grey-text text-darken-3"
                                        onClick={this.selectMenu.bind(this, v.id)}
                                    >{v.page}</a>
                                </li>
                            )
                        }
                    }.bind(this))}
                </ul>
                <ul id="services-dropdown" className="dropdown-content">
                    { this.state.servicesData.map(function(vSd, iSd){
                        return(
                            <li key={vSd.id}>
                                <a href="#!" onClick={this.selectMenu.bind(this, vSd.id)}>{vSd.page}</a>
                            </li>
                        )
                    }.bind(this))}
                </ul>
            </div>
        )
    }
});

module.exports = NavBar;