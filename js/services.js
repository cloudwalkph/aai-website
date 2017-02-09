var React = require('react');
var ReactDOM = require('react-dom');

const Services = React.createClass({

    getDefaultProps() {
        return {
            servicesData: [
                {
                    id: 'brandActivations',
                    img: 'img/pic1.jpg',
                    hoverImg: 'img/pic1.png',
                    content: [
                        <span>Engaging on-ground activations that lets consumers experience our clients&rsquo; products and services in a different and memorable way.</span>
                    ]
                },
                {
                    id: 'events',
                    img: 'img/pic2.jpg',
                    hoverImg: 'img/pic2.png',
                    content: [
                    <span>Create newsworthy moments or simply make a day truly unforgettable. <br/><br/></span>,
                        'From concept, planning to execution, we run PR events, product launches and awards shows that make any date extraordinary.'
                    ]
                },
                {
                    id: 'sampling',
                    img: 'img/pic3.jpg',
                    hoverImg: 'img/pic3.png',
                    content: [
                        'A nationwide logistics and operations network backed by innovative technologies, allows us to deploy massive sampling campaigns in all major cities and suburban areas with the utmost efficiency.'
                    ]
                },
                {
                    id: 'designAndProduction',
                    img: 'img/pic4.jpg',
                    hoverImg: 'img/pic4.png',
                    content: [
                        'Design and build anything from stages, booths, ambient media, UX and merchandize.'
                    ]
                },
                {
                    id: 'dataAndAnalytics',
                    img: 'img/dataAndAnalytics.jpg',
                    hoverImg: 'img/dataAndAnalytics.png',
                    content: [
                        'We provide and use a comprehensive and updated set of data on important on-ground venues that will maximize whatever types of advertising we execute.'
                    ]
                },
                {
                    id: 'tieUpsAndPartnerships',
                    img: 'img/pic6.jpg',
                    hoverImg: 'img/pic6.png',
                    content: [
                        'Our network of administrators, negotiators and planners can help bring together companies, organizations and institutions from all industries to form mutually beneficial partnerships.'
                    ]
                }
            ]
        }
    },

    getInitialState() {
        return {
            servicesData: this.props.servicesData
        }
    },

    componentDidMount () {
        $('#title').height(window.innerHeight - 64);
    },

    handleClick(page) {
        this.props.getPage(page);
    },

    changeImage(e) {
        $(this.refs[e]).find('img').attr('src', this.state.servicesData[e].hoverImg);
        // $(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up').addClass('buttonHoverAnimate');
        $(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up');
    },

    revertImage(e) {
        $(this.refs[e]).find('img').attr('src', this.state.servicesData[e].img);
        $(this.refs[e]).find('.card-action').children('a').removeClass('buttonHoverAnimate').addClass('hide-on-med-and-up');
    },

    render() {
        return(
            <div>

                <div className="section valign-wrapper">
					<div className="container center-align" style={{padding : '30px 0'}}>
                        <img className="responsive-img" src="img/ourservices.png" />
                    </div>
                </div>

                <div className="section">
                    <div className="container serviceContentParagraph">
                        <p>We deliver a diverse set of advertising services that caters to our clients constantly evolving needs. Being an integrated agency allows us to manage the entire project road map from initial concepts all the way to actual implementation.</p> 
                        <p>New innovations in video monitoring, consumer tracking and data acquisition gives our clients an abundance of clear perspectives and valuable insights whenever and wherever a project is taking place.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="section hide-on-med-and-down"> {/*DESKTOP VIEW*/}
                    <div className="container">
                        <div className="row">
                        { this.state.servicesData.map(function(value, index) {
                            return(
                                <div
                                    key={value.id}
                                    ref={index}
                                    className="col s12 m4 l4"
                                    onMouseEnter={this.changeImage.bind(this, index)}
                                    onMouseLeave={this.revertImage.bind(this, index)}
                                    onClick={this.handleClick.bind(this, value.id)}
                                >
                                    <div className="card large z-depth-0">
                                        <div className="card-image">
                                            <img className="responsive-img" src={value.img} />
                                            <span className="card-title"></span>
                                        </div>
                                        <div className="card-content">
                                            {value.content.map(function(value, index) {
                                                return(
                                                    <p
                                                        key={index}
                                                        className="center-align"
                                                    >
                                                    {value}
                                                    </p>
                                                )
                                            }.bind(this))}
                                        </div>
                                        <div
                                            className="card-action center-align"
                                        >
                                            <a className="btn hide-on-med-and-up z-depth-0">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }.bind(this))}
                            
                        </div>
                    </div>
                </div>

            	<div className="section hide-on-large-only"> {/*MOBILE VIEW*/}
                    <div className="container">
                        <div className="row">
                        { this.state.servicesData.map(function(value, index) {
                            return(
                                <div
                                    key={value.id}
                                    className="col s12 m4 l4"
                                    onClick={this.handleClick.bind(this, value.id)}
                                >
                                    <div className="card z-depth-0">
                                        <div className="card-image">
                                            <img className="responsive-img" src={value.img} />
                                            <span className="card-title"></span>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        }.bind(this))}
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Services;