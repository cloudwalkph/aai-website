var React = require('react');

const CarouselType = React.createClass({

    getDefaultProps () {
        return ({
            article: null
        })
    },

    getInitialState () {
        return ({
            articleData: this.props.articleData
        })
    },

    componentDidMount () {
        window.scrollTo(0, 0);
        $('.carousel').carousel({
            fullWidth: true
        });
    },

    render() {
        return(
            <div>

                <h5 className="center">{this.state.articleData.title}</h5>

                <div className="carousel">
                    { this.state.articleData.img.map(function(v,i){
                        return(
                            <a key={i} className="carousel-item">
                                <img src={v} />
                            </a>
                        )
                    })}
                </div>

                <div className="section">
                    <div className="row container">
                        { this.state.articleData.context.map(function(v,i){
                            return(
                                <p key={i}>{v}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = CarouselType;