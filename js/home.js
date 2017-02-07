var React = require('react');

const Home = React.createClass({

    getDefaultProps() {
        return {
            sliderData: [
                {
                    captionClass: 'col s12 l4 right center-align',
                    image: 'img/home/activations.jpg',
                    imageMobile : 'img/aai_logo.png',
                    title: [
                        <span> Advertising that go </span>, 
                        <span className="aai_orange"> Beyond </span>, 
                        <span> Expectations </span>
                    ],
                    titleMobile: [
                        <span> Advertising that go </span>, 
                        <span className="aai_orange"> Beyond </span>, 
                        <span> Expectations </span>
                    ],
                    context: [
                        'We are a full-service ad agency that specializes in creating meaningful brand experiences that bring our clients and their customers closer together.',
                        'Using efficient traditional methods enhanced by relevant innovations, we provide effective and smarter services that go beyond what\'s expected in below-the-line advertising.'
                    ],
                    contextMobile: [
                        'We are a full-service ad agency that specializes in creating meaningful brand experiences that bring our clients and their customers closer together.',
                        'Using efficient traditional methods enhanced by relevant innovations, we provide effective and smarter services that go beyond what\'s expected in below-the-line advertising.'
                    ],
                    contextClass: 'flow-text',
                    contextClassMobile: 'flow-text',
                    buttonLabel: 'Our Products and Services',
                    buttonName: 'about'
                },
                {
                    captionClass: 'col s12 l4 center-align',
                    image: 'img/home/verify.jpg',
                    imageMobile : 'img/home/verify.jpg',
                    title: [
                        <span className="white-text"> THE FIRST TO HAVE TRULY </span>, 
                        <span className="aai_orange"> VERIFIED </span>, 
                        <span className="white-text"> RESULTS ON-GROUND </span>
                    ],
                    titleMobile: [
                        <span className=""> THE FIRST TO HAVE TRULY </span>, 
                        <span className="aai_orange"> VERIFIED </span>, 
                        <span className=""> RESULTS ON-GROUND </span>
                    ],
                    context: [
                        <span className="white-text">We are the first agency to use VERIFY - an on-ground validation and data gathering platform that verifies the actual results and figures collected during on-ground advertising executions.</span>,
                        <span className="white-text">Thru Verify, Activations Advertising gives its clients unmatched transparency in the way it conducts its work on-ground while collecting useful data during activation or sampling runs.</span>,
                    ],

                    contextMobile: [
                        <span className="">We are the first agency to use VERIFY - an on-ground validation and data gathering platform that verifies the actual results and figures collected during on-ground advertising executions.</span>,
                        <span className="">Thru Verify, Activations Advertising gives its clients unmatched transparency in the way it conducts its work on-ground while collecting useful data during activation or sampling runs.</span>,
                    ],
                    contextClass: 'white-text flow-text',
                    contextClassMobile: 'flow-text',
                    buttonLabel: 'Learn More',
                    buttonName: 'sampling'
                },
                {
                    captionClass: 'col s12 l4',
                    image: 'img/uploads/20160818_033844.jpg',
                    imageMobile : "img/uploads/20160818_033844.jpg",
                    title: [
                        <span className="aai_orange"> AAI </span>, 
                        <span className="white-text"> Helps Unleash the Power of </span>,
                        <span className="aai_orange"> Samsung </span>
                    ],
                    titleMobile: [
                        <span className="aai_orange"> AAI </span>, 
                        <span className=""> Helps Unleash the Power of </span>,
                        <span className="aai_orange"> Samsung </span>,
                    ],
                    context: [],
                    contextMobile: [],
                    contextClass: 'flow-text',
                    contextClassMobile: 'flow-text',
                    buttonLabel: 'Read More',
                    buttonName: 'samsung'
                },
                {
                    captionClass: 'col s12 l3 right right-align',
                    image: 'img/home/happy_skin.jpg',
                    imageMobile : 'img/home/happy_skin.jpg',
                    title: [
                        <span className="aai_orange"> HAPPY SKIN </span>, 
                        <span className="white-text"> BRINGS DISNEY&rsquo;S PRINCESSES TO LIFE </span>
                    ],
                    titleMobile: [
                        <span className="aai_orange"> HAPPY SKIN </span>, 
                        <span className=""> BRINGS DISNEY&rsquo;S PRINCESSES TO LIFE </span>
                    ],
                    context: [],
                    contextMobile: [],
                    contextClass: 'flow-text',
                    contextClassMobile: 'flow-text',
                    buttonLabel: 'Read More',
                    buttonName: 'happy_skin'
                },
                {
                    captionClass: 'col s12 l4',
                    image: 'img/home/greenwich.jpg',
                    imageMobile : 'img/home/greenwich.jpg',
                    title: [
                        <span className="aai_orange"> GREENWICH </span>, 
                        <span className="white-text"> CROWNS A NEW ULTIMATE BANDKADA </span>
                    ],
                    titleMobile: [
                        <span className="aai_orange"> GREENWICH </span>, 
                        <span className=""> CROWNS A NEW ULTIMATE BANDKADA </span>
                    ],
                    context: [],
                    contextMobile: [],
                    contextClass: 'flow-text white-text',
                    contextClassMobile: 'flow-text',
                    buttonLabel: 'Read More',
                    buttonName: 'greenwich'
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
            height: screen.height,
            interval : 500000
        });
    },

    handleClick(page) {
        this.props.getPage(page.buttonName);
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

                <div className="slider fullscreen hide-on-med-and-down">
                    <ul className="slides white">
                    { this.state.sliderData.map(function(v,i) {
                        return (
                            <li key={i}>
                                <img width="100%" src={v.image} />

                                <div className="caption valign-wrapper" style={{height : '70vh'}}>
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
                                                onClick={this.handleClick.bind(this, v)}
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

                <div className="slider hide-on-large-only" style={{height : '100vh'}}> {/*MOBILE VIEW*/}
                    <ul className="slides white">
                    { this.state.sliderData.map(function(vm,im) {
                        return (
                            <li key={im}>
                                <div className="caption" style={{top: 0,left: 0,width: '100%'}}>
                                    <div className="row">
                                        <div className="card z-depth-0">
                                            <div className="card-image">
                                                <img src={vm.imageMobile} style={{width : '100%'}} />
                                                <span className="card-title"></span>
                                            </div>
                                            <div className="card-content">
                                                <center>
                                                    <h5 className="headline">
                                                    { vm.titleMobile.map(function(vtm, itm) {
                                                        return(
                                                            <span key={itm}>{vtm}</span>
                                                        )})
                                                    }
                                                    </h5>
                                                </center>
                                                { vm.contextMobile.map(function(vcm, icm) {
                                                    return(
                                                        <p key={icm} className={vm.contextClassMobile}>{vcm}</p>
                                                    )
                                                }.bind(this))}
                                            </div>
                                            <div className="card-action" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                                <a
                                                    onClick={this.handleClick.bind(this, vm.buttonName)}
                                                    className="waves-effect waves-orange orange accent-3 btn z-depth-0"
                                                >{vm.buttonLabel}</a>
                                            </div>
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