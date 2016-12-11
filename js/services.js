var React = require('react');

const Services = React.createClass({

    getDefaultProps() {
        return {
            servicesData: [
                {
                    id: 'brandActivations',
                    img: 'img/pic1.jpg',
                    content: [
                        'Engaging on-ground activations that lets consumer experience our clients\' products and services in a different and memorable way.'
                    ]
                },
                {
                    id: 'events',
                    img: 'img/pic2.jpg',
                    content: [
                        'Create newsworthy moments or simply make a day truly unforgettable.',
                        'From concept, planning to execution, we run PR events, product launches and awards shows that make any date extraordinary.'
                    ]
                },
                {
                    id: 'sampling',
                    img: 'img/pic3.jpg',
                    content: [
                        'A nationwide logistics and operations network backed by innovative technologies, allows us to deploy massive sampling campaigns in all major cities and suburban areas with the utmost efficiency.'
                    ]
                },
                {
                    id: 'designAndProduction',
                    img: 'img/pic4.jpg',
                    content: [
                        'Design and build anything from stages, booths, ambient media, UX and merchandize.'
                    ]
                },
                {
                    id: 'creativesAndStrategy',
                    img: 'img/pic5.jpg',
                    content: [
                        'We help our clients launch major campaigns from concept to execution born from big ideas following a defined and realistic strategy.'
                    ]
                },
                {
                    id: 'tieUpsAndPartnerships',
                    img: 'img/pic6.jpg',
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

    handleClick(e) {
        this.props.getPage(e);
    },

    changeImage(e) {

        $('#'+e.target.id).find('img').attr('src', 'img/' + e.target.id + '.png');
        $('#'+e.target.id).find('.card-action').addClass('orange accent-3');
    },

    revertImage(e) {
        $('#'+e.target.id).find('img').attr('src', 'img/' + e.target.id + '.jpg');
        $('#'+e.target.id).find('.card-action').removeClass('orange accent-3');
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
                                className="col s4"
                                id={'pic' + (index + 1)}
                                onMouseEnter={this.changeImage}
                                onMouseLeave={this.revertImage}
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
                                    <div className="card-action">
                                        <a
                                            name={value.id}
                                            onClick={this.handleClick}
                                            className="white-text"
                                        >
                                            Learn More
                                        </a>
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