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
                        'Engaging on-ground activations that lets consumer experience our clients\' products and services in a different and memorable way.'
                    ]
                },
                {
                    id: 'events',
                    img: 'img/pic2.jpg',
                    hoverImg: 'img/pic2.png',
                    content: [
                        'Create newsworthy moments or simply make a day truly unforgettable.',
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
                    id: 'creativesAndStrategy',
                    img: 'img/pic5.jpg',
                    hoverImg: 'img/pic5.png',
                    content: [
                        'We help our clients launch major campaigns from concept to execution born from big ideas following a defined and realistic strategy.'
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

    handleClick(page) {
        this.props.getPage(page);
    },

    changeImage(e) {

        $(this.refs[e]).find('img').attr('src', this.state.servicesData[e].hoverImg);
        $(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up').addClass('buttonHoverAnimate');
    },

    revertImage(e) {
        $(this.refs[e]).find('img').attr('src', this.state.servicesData[e].img);
        $(this.refs[e]).find('.card-action').children('a').addClass('hide-on-med-and-up').removeClass('buttonHoverAnimate');
    },

    render() {
        return(
            <div className="section">
                <div className="container">
                    <center>
                        <img className="responsive-img" src="img/ourservices.png" />
                    </center>
                    <div className="section">
                        <p>We deliver a diverse set of advertising services that caters to our clients constantly evolving needs. Being an integrated agency allows us to manage the entire project road map from initial concepts all the way to actual implementation.</p> 
                        <p>New innovations in video monitoring, consumer tracking and data acquisition gives our clients an abundance of clear perspectives and valuable insights whenever and wherever a project is taking place.</p>
                    </div>
                </div>

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
                                                    style={this.state.textStyle}
                                                >
                                                {value}
                                                </p>
                                            )
                                        }.bind(this))}
                                    </div>
                                    <div
                                        className="card-action"
                                        onClick={this.handleClick.bind(this, value.id)}
                                    >
                                        <a className="btn orange accent-3 hide-on-med-and-up z-depth-0">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }.bind(this))}
                        
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Services;