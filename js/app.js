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
            page: 'home',
            articleData: [
				{
					'id': 'samsung',
					title: 'AAI Helps Unleash the Power of Samsung',
					context: [
						<span>As one of the biggest names in technology, Samsung showed why it&rsquo;s a leader at innovating every aspect of human life with the Power of Samsung showcase. One of the biggest tech conventions ever done in the Philippines, the Power of Samsung Showcase featured the best products and innovations Samsung has to offer in the realm of Mobile, Consumer Electronics, Audio & Video, Healthcare, Home Technology and Air Conditioning.</span>,
						<span>As the implementing agency, we had the big task to create ways in where Samsung&rsquo;s different divisions can share their message and showcase their best products. Inspired by the honeycomb structure, we divided the venue into different zones where each unit is featured. Each individual zone told the story behind the products and innovations being showcased while allowing visitors to experience the products themselves thru experiential booth.</span>,
						'To keep track of the invited VIPs and dignitaries entering the event, we developed a digital RFID pin that contained the guest’s information and their itinerary for the event. RFID stations located throughout the venue detected pins and showed relevant information to the guests.',
						'The Power of Samsung Showcase was the one day when the whole might of Samsung was apparent for everyone to see and a big reminder of how technology has changed human lives forever.'
					],
					img: [
						'img/uploads/samsung_01.jpg',
						'img/uploads/samsung_02.jpg',
						'img/uploads/samsung_03.jpg'
					],
					imgFront: 'img/uploads/samsung_01.jpg',
				},
				{
					id: 'greenwich',
					title: 'Another Greenwich Ultimate BandKada is Crowned',
					context: [
						<span>Another year, another Ultimate BandKada. For the second year in a row, AAI played a key role in helping find the hottest unsigned rock bands in the country in the Greenwich Ultimate BandKada Search Season 2. </span>,
						<span>A 5-month nationwide search with mall auditions attended by hundreds of hopefuls exposed us to some of the most promising musical talent the country has to offer. After a rigorous narrowing down of contestants, only 8 bands made it to the the big finals night in Valkyrie Club in BGC for a chance to be this year’s Greenwich Ultimate BandKada.</span>,
						<span>The Grand Finals in the Valkyrie lived up to all the hype with all 8 finalists performing in front of fans and judges including UpDharmaDown&rsquo;s Armi Millare. In the end, it was PLETHORA who lifted the crown winning a large cash prize, a recording contract with Viva records and, most importantly, the crown of being The Greenwich Ultimate BandKada.</span>
					],
					img: [
						'img/uploads/greenwich_01.jpg',
						'img/uploads/greenwich_02.jpg',
						'img/uploads/greenwich_03.jpg',
						'img/uploads/greenwich_04.jpg'
					],
					imgFront: 'img/news/barkada.png'
				},
				{
					'id': 'happy-faces',
					title: <span>Happy Skin and Disney Brings out the Princess in Every Girl</span>,
					context: [
						<span>A match that can only be made in a fairy-tale has come true when Happy Skin and Disney collaborated to create an exclusive line of cosmetics inspired by Disney&rsquo;s iconic princess characters.</span>,
						<span>As the lead agency in the launch, AAI created a launch activation at the Power Plant Mall&rsquo;s activity center that featured rich experiences lifted from the stories of Disney&rsquo;s animated hits. The main challenge was to tell the story not just of Disney&rsquo;s characters but also the amazing way Happy Skin created a wonderful line of cosmetic products that made every woman and girl wearing it feel like a real Disney Princess.</span>,
						'Attended by celebrities and fans, the activation was heralded by both Happy Skin and Disney as a shining example of how to fantastic brands can work together, share inspiration and create something truly magical.'
					],
					img: [
						'img/uploads/happy_skin_01.jpg',
						'img/uploads/happy_skin_02.jpg',
						'img/uploads/happy_skin_03.jpg'
					],
					imgFront: 'img/uploads/happy_skin_03.jpg'
				}
			]
        };
    },

    getInitialState() {
        return {
            page: this.props.page,
            articleData: this.props.articleData

        };
    },

    getPage(page) {
        if(page == 'samsung') {
            this.getArticle(this.props.articleData[0]);
        } else {
            this.setState({
                page: page
            })
        }
    },

    getArticle(article) {
        this.setState({
            page: 'article',
            article: article
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
                    { this.state.page == 'news' ? <News articleData={this.state.articleData} getArticle={this.getArticle} getPage={this.getPage} /> : '' }
                    { this.state.page == 'about' ? <About /> : '' }
                    { this.state.page == 'jobs' ? <Jobs /> : '' }
                    { this.state.page == 'contact' ? <Contact /> : '' }

                    { this.state.page == 'brandActivations' ? <BrandActivations /> : '' }
                    { this.state.page == 'events' ? <Events /> : '' }
                    { this.state.page == 'sampling' ? <Sampling /> : '' }
                    { this.state.page == 'designAndProduction' ? <DesignAndProduction /> : '' }
                    { this.state.page == 'dataAndAnalytics' ? <DataAndAnalytics /> : '' }
                    { this.state.page == 'tieUpsAndPartnerships' ? <TieUpsAndPartnerships /> : '' }

                    { this.state.page == 'article' ? <CardType article={this.state.article} /> : ''}
                </main>

                <Footer />
            </div>
        )
    }
});

module.exports = App;