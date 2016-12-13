var React = require('react');

const Home = React.createClass({

    getDefaultProps() {
        return {
            sliderData: [
                {
                    captionClass: 'col s12 l4 right',
                    image: 'img/1.jpg',
                    title: ['Advertising that go ', <span className="orange-text text-accent-3">Beyond</span>, ' Expectations'],
                    context: [
                        'We are a full-service ad agency that specializes in creating meaningful brand experiences that bring our clients and their customers closer together.',
                        'Using efficient traditional methods enhanced by relevant innovations, we provide effective and smarter services that go beyond what\'s expected in below-the-line advertising.'
                    ],
                    contextClass: 'brown-text text-brown-4',
                    buttonLabel: 'Our Products and Services',
                    buttonName: 'about'
                },
                {
                    captionClass: 'col s12 l4',
                    image: 'img/2.jpg',
                    title: ['Sampling ', <span className="orange-text text-accent-3">+</span>],
                    context: [
                        'A nationwide logistics and operations network, allows us to deploy massive sampling campaigns in all major cities and suburban areas with the utmost efficiency.',
                        'Digital monitoring systems provide key insights from data gathered from millions of consumer interactions.'
                    ],
                    contextClass: 'brown-text text-brown-4',
                    buttonLabel: 'Learn More',
                    buttonName: 'sampling'
                },
                {
                    captionClass: 'col s12 l4 right',
                    image: 'img/3.jpg',
                    title: ['DESIGN ', <span className="orange-text text-accent-3">&</span>, ' PRODUCTION'],
                    context: [
                        'Design and build anything from stages, booths, ambient media, UX and merchandize.',
                        'Our team of professionals specializing in design, graphics, 3D modeling, videography and animation will bring your ideas to life.'
                    ],
                    contextClass: 'brown-text text-brown-4',
                    buttonLabel: 'Learn More',
                    buttonName: 'brandActivations'
                },
                {
                    captionClass: 'col s12 l4',
                    image: 'img/4.jpg',
                    title: ['Samsung launches ', <span className="orange-text text-accent-3">Gear s2</span>],
                    context: [
                        'Pellentesque vitae dui cursus, tincidunt ex nec, feugiat dui. Aenean tempus venenatis ultricies. Vivamus aliquet, enim sed pulvinar commodo, lacus sapien varius tellus, sed convallis libero lacus a lacus.',
                        'In hac habitasse platea dictumst. Vivamus condimentum purus vel egestas euismod.'
                    ],
                    contextClass: 'white-text',
                    buttonLabel: 'View Story',
                    buttonName: 'news'
                }
            ]
        }
    },

    getInitialState() {
        return {
            sliderData: this.props.sliderData
        }
    },

    componentDidMount () {
        $('.slider').slider({
            full_width: true,
            height: 500,
            indicators: true
        });
    },

    handleClick(e) {
        this.props.getPage(e);
    },

    render() {
        return(
            <div>
                <div className="slider fullscreen">
                    <ul className="slides white">
                    { this.state.sliderData.map(function(v,i) {
                        return (
                            <li key={i}>
                                <img width="100%" src={v.image} />

                                <div className="caption">
                                    <div className="row">
                                        <div className={v.captionClass}>
                                            <center>
                                                <h4
                                                    className="cyan-text text-darken-4"
                                                >
                                                { v.title.map(function(vt, it) {
                                                    return(
                                                        <span key={it}>{vt}</span>
                                                    )})
                                                }
                                                </h4>
                                            </center>
                                            { v.context.map(function(vc, ic) {
                                                return(
                                                    <p key={vc} className={v.contextClass}>{vc}</p>
                                                )
                                            }.bind(this))}
                                            <center>
                                                <a
                                                    name={v.buttonName}
                                                    onClick={this.handleClick}
                                                    className="waves-effect waves-orange orange accent-3 btn"
                                                >{v.buttonLabel}</a>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }.bind(this))}

                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Home;