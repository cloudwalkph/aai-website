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
            ]
        }
    },

    getInitialState() {
        return {
            menuData: this.props.menuData
        }
    },

    componentDidMount () {
        $(".button-collapse").sideNav();
        $(".dropdown-button").dropdown();
    },
    
    selectMenu(e) {
        this.props.getPage(e);
    },

    render() {
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="white z-depth-0">
                        <div className="nav-wrapper container">
                            <a name="home" className="brand-logo" onClick={this.selectMenu}>
                                <img name="home" className="responsive-img" src="img/logo.png" />
                            </a>
                            <a data-activates="slide-out" className="button-collapse">
                                <i className="material-icons grey-text text-darken-3">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                { this.state.menuData.map(function(v, i) {
                                    return(
                                        <li key={i} className={v.active}>
                                            <a 
                                                className={v.class} 
                                                name={v.id} 
                                                onClick={this.selectMenu}
                                                data-activates={v.dropdown}
                                            >{v.page}</a>
                                        </li>
                                    )
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
                            <li key={i} className={v.active}>
                                <a 
                                    className="waves-effect grey-text text-darken-3" 
                                    name={v.id} 
                                    onClick={this.selectMenu}
                                >{v.page}</a>
                            </li>
                        )
                    }.bind(this))}
                </ul>
                <ul id="services-dropdown" className="dropdown-content">
                    <li><a href="#!" name="brandActivations" onClick={this.selectMenu}>Brand Activations</a></li>
                    <li><a href="#!" name="events" onClick={this.selectMenu}>Events</a></li>
                    <li><a href="#!" name="sampling" onClick={this.selectMenu}>Sampling +</a></li>
                    <li><a href="#!" name="designAndProduction" onClick={this.selectMenu}>Design And Production</a></li>
                    <li><a href="#!" name="creativesAndStrategy" onClick={this.selectMenu}>Creatives And Strategy</a></li>
                    <li><a href="#!" name="tieUpsAndPartnerships" onClick={this.selectMenu}>Tie-ups And Partnerships</a></li>
                </ul>
            </div>
        )
    }
});

module.exports = NavBar;