var React = require('react');

const Home = React.createClass({

    getDefaultProps() {
        return {
            sliderData: [
                {
                    captionClass: 'col s12 l4 right center-align',
                    image: 'img/home/activations.jpg',
                    title: [
                        <span> Advertising that go </span>, 
                        <span className="orange-text text-accent-3"> Beyond </span>, 
                        <span> Expectations </span>
                    ],
                    context: [
                        'We are a full-service ad agency that specializes in creating meaningful brand experiences that bring our clients and their customers closer together.',
                        'Using efficient traditional methods enhanced by relevant innovations, we provide effective and smarter services that go beyond what\'s expected in below-the-line advertising.'
                    ],
                    contextClass: 'flow-text',
                    buttonLabel: 'Our Products and Services',
                    buttonName: 'about'
                },
                {
                    captionClass: 'col s12 l4 center-align',
                    image: 'img/home/verify.jpg',
                    title: [
                        <span className="white-text"> THE FIRST TO HAVE TRULY </span>, 
                        <span className="aai_orange"> VERIFIED </span>, 
                        <span className="white-text"> RESULTS ON-GROUND </span>
                    ],
                    context: [
                        <span className="white-text">We are the first agency to use VERIFY - an on-ground validation and data gathering platform that verifies the actual results and figures collected during on-ground advertising executions.</span>,
                        <span className="white-text">Thru Verify, Activations Advertising gives its clients unmatched transparency in the way it conducts its work on-ground while collecting useful data during activation or sampling runs.</span>,
                    ],
                    contextClass: 'white-text flow-text',
                    buttonLabel: 'Learn More',
                    buttonName: 'sampling'
                },
                {
                    captionClass: 'col s12 l3 right right-align',
                    image: 'img/home/happy_skin.jpg',
                    title: [
                        <span className="aai_orange"> HAPPY SKIN </span>, 
                        <span className="white-text"> BRINGS DISNEY&rsquo;S PRINCESSES TO LIFE </span>
                    ],
                    context: [],
                    contextClass: 'flow-text',
                    buttonLabel: 'Read More',
                    buttonName: 'brandActivations'
                },
                {
                    captionClass: 'col s12 l4',
                    image: 'img/home/greenwich.jpg',
                    title: [
                        <span className="aai_orange"> GREENWICH </span>, 
                        <span className="white-text"> CROWNS A NEW ULTIMATE BANDKADA </span>
                    ],
                    context: [],
                    contextClass: 'flow-text white-text',
                    buttonLabel: 'Read More',
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
            height: '800px'
        });
    },

    handleClick(page) {
        this.props.getPage(page);
    },

    handleSliderNavigation(e) {
        let direction = e.target.getAttribute('class');
        if(direction == 'leftNavi')
        {
            $('.slider').slider('prev');
            return;
        }

        $('.slider').slider('next');
    },

    render() {
        return(
            <div>
                <img className="leftNavi" onClick={this.handleSliderNavigation} src="img/NAVIGATION/leftArrow.png" />
                <img className="rightNavi" onClick={this.handleSliderNavigation} src="img/NAVIGATION/rightArrow.png" />

                <div className="slider fullscreen">
                    <ul className="slides white">
                    { this.state.sliderData.map(function(v,i) {
                        return (
                            <li key={i}>
                                <img width="100%" src={v.image} />

                                <div className="caption">
                                    <div className="row">
                                        <div className={v.captionClass}>
                                            <h4 className="headline">
                                            { v.title.map(function(vt, it) {
                                                return(
                                                    <span key={it}>{vt}</span>
                                                )})
                                            }
                                            </h4>
                                            { v.context.map(function(vc, ic) {
                                                return(
                                                    <p key={ic} className={v.contextClass}>{vc}</p>
                                                )
                                            }.bind(this))}
                                            <a
                                                onClick={this.handleClick.bind(this, v.buttonName)}
                                                className="waves-effect waves-aai_btn btn z-depth-0"
                                            >{v.buttonLabel}</a>
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