var React = require('react');

const CardType = React.createClass({

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
        $('.slider').slider();
    },

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },

    render() {
        return(
            <div>

                <div className="row container">
                    <div className="col s12">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src={this.state.articleData.img[0]} />
                            </div>
                            <div className="card-content">
                                <span className="card-title grey-text text-darken-4">
                                    <b>{this.state.articleData.title}</b>
                                </span>
                                { this.state.articleData.context.map(function(v,i){
                                    return(
                                        <p key={i}>{v}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = CardType;