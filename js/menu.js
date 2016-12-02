var React = require('react');

const menuData = [
    {
        id: 'home',
        page: 'Home'
    },
    {
        id: 'services',
        page: 'Services'
    },
    {
        id: 'news',
        page: 'News'
    },
    {
        id: 'about',
        page: 'About'
    },
    {
        id: 'jobs',
        page: 'Jobs'
    },
    {
        id: 'contact',
        page: 'Contact'
    }
]

const NavBar = React.createClass({

    componentDidMount () {
        $(".button-collapse").sideNav();
    },
    
    selectMenu(e) {
        this.props.getPage(e.target.id);
    },

    render() {
        return(
            <div className="navbar-fixed">
                <nav className="white z-depth-0">
                    <div className="nav-wrapper container">
                        <a href="#!" className="brand-logo">
                            <img className="responsive-img" src="img/logo.png" />
                        </a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse">
                            <i className="material-icons grey-text text-darken-3">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                        { menuData.map(function(value, index) {
                            return(
                                <li key={index} className={value.active}>
                                    <a id={value.id} className="grey-text text-darken-3" onClick={this.selectMenu} >{value.page}</a>
                                </li>
                            )
                        }.bind(this))}
                        </ul>
                        <ul className="side-nav">
                        { menuData.map(function(value, index) {
                            return(
                                <li key={index} className={value.active}>
                                    <a id={value.id} className="grey-text text-darken-3" onClick={this.selectMenu} >{value.page}</a>
                                </li>
                            )
                        }.bind(this))}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});

module.exports = NavBar;