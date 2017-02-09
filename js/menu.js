var React = require('react');

const NavBar = React.createClass({

    getDefaultProps() {
        return {
            menuData: [
                {
                    id: 'home',
                    page: 'Home',
                    class: 'aai_menu waves-effect'
                },
                {
                    id: 'services',
                    page: 'Services',
                    class: 'aai_menu waves-effect dropdown-button'
                },
                {
                    id: 'news',
                    page: 'News',
                    class: 'aai_menu waves-effect'
                },
                {
                    id: 'about',
                    page: 'About',
                    class: 'aai_menu waves-effect'
                },
                {
                    id: 'jobs',
                    page: 'Jobs',
                    class: 'aai_menu waves-effect'
                },
                {
                    id: 'contact',
                    page: 'Contact',
                    class: 'aai_menu waves-effect'
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
                /*{
                    id: 'creativesAndStrategy',
                    page: 'Creatives And Strategy'
                },*/
                {
                    id: 'dataAndAnalytics',
                    page: 'Data And Analytics'
                },
                {
                    id: 'tieUpsAndPartnerships',
                    page: 'Tie-ups And Partnerships'
                }
            ],
            activePage: 'home'
        }
    },

    getInitialState() {
        return {
            menuData: this.props.menuData,
            servicesData: this.props.servicesData,
            activeMenu: this.props.activePage
        }
    },

    componentWillReceiveProps (nextProps) {
        this.setState({
            activeMenu: nextProps.activePage
        });
    },    

    componentDidMount () {
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 240
                edge: 'right', // Choose the horizontal origin
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
    
    selectMenu (page) {
        this.props.getPage(page);
    },

    render () {
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="white z-depth-0">
                        <div className="nav-wrapper container">
                            <div>
                                <a className="brand-logo" onClick={this.selectMenu.bind(this, 'home')}>
                                    <img className="responsive-img" src="img/logo.png" />
                                </a>
                            </div>
                            <a data-activates="slide-out" className="button-collapse right">
                                <i className="material-icons grey-text text-darken-3">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                { this.state.menuData.map(function(v, i) {
                                    if(v.id === 'services') {
                                        return(
                                            <li
                                                key={v.id}
                                                className={this.state.activeMenu == v.id ? 'active' : ''}
                                            >
                                                <a 
                                                    className={v.class}
                                                    onClick={this.selectMenu.bind(this, v.id)}
                                                    // data-activates="services-dropdown"
                                                    // data-hover="true"
                                                    // data-constrainwidth="false"
                                                    // data-beloworigin="true"
                                                >{v.page}</a>
                                            </li>
                                        )
                                    } else {
                                        return(
                                            <li 
                                                key={v.id}
                                                className={this.state.activeMenu == v.id ? 'active' : ''}
                                            >
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
                        return(
                            <li
                                key={v.id}
                                className={this.state.activeMenu == v.id ? 'active' : ''}
                            >
                                <a 
                                    className="waves-effect"
                                    onClick={this.selectMenu.bind(this, v.id)}
                                >{v.page}</a>
                            </li>
                        )
                    }.bind(this))}
                </ul>
                <ul id="services-dropdown" className="dropdown-content">
                    { this.state.servicesData.map(function(vSd, iSd){
                        return(
                            <li
                                key={vSd.id}
                                className={this.state.activeMenu == vSd.id ? 'active' : ''}
                            >
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