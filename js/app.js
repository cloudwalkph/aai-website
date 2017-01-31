var React = require('react');

const Menu = require('./menu');
const Footer = require('./footer');

const Home = require('./home');
const Services = require('./services');
const News = require('./news');
const About = require('./about');
const Jobs = require('./jobs');
const Contact = require('./contact');

const BrandActivations = require('./services/brandActivations');
const Events = require('./services/events');
const Sampling = require('./services/sampling');
const DesignAndProduction = require('./services/designAndProduction');
// const CreativesAndStrategy = require('./services/creativesAndStrategy');
const DataAndAnalytics = require('./services/dataAndAnalytics');
const TieUpsAndPartnerships = require('./services/tieUpsAndPartnerships');

const CardType = require('./news/articles/cardType');
const CarouselType = require('./news/articles/carouselType');

var App = React.createClass({
    propTypes: {
        page: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            page: 'home'
        };
    },

    getInitialState() {
        return {
            page: this.props.page
        };
    },

    getPage(page, data) {
        this.setState({
            page: page,
            data: data
        })
    },

    getArticle(articleData) {
        this.setState({
            page: 'article',
            articleData: articleData
        })
    },

    render() {
        return(
            <div>
                <header>
                    <Menu getPage={this.getPage} activePage={this.state.page} />
                </header>
                    
                <main>
                    { this.state.page == 'home' ? <Home getPage={this.getPage} /> : '' }
                    { this.state.page == 'services' ? <Services getPage={this.getPage} /> : '' }
                    { this.state.page == 'news' ? <News getArticle={this.getArticle} /> : '' }
                    { this.state.page == 'about' ? <About /> : '' }
                    { this.state.page == 'jobs' ? <Jobs /> : '' }
                    { this.state.page == 'contact' ? <Contact /> : '' }

                    { this.state.page == 'brandActivations' ? <BrandActivations /> : '' }
                    { this.state.page == 'events' ? <Events /> : '' }
                    { this.state.page == 'sampling' ? <Sampling /> : '' }
                    { this.state.page == 'designAndProduction' ? <DesignAndProduction /> : '' }
                    { this.state.page == 'dataAndAnalytics' ? <DataAndAnalytics /> : '' }
                    { this.state.page == 'tieUpsAndPartnerships' ? <TieUpsAndPartnerships /> : '' }

                    { this.state.page == 'article' ? <CardType articleData={this.state.articleData} /> : ''}
                </main>

                <Footer />
            </div>
        )
    }
});

module.exports = App;