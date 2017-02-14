var React = require('react');

const CardType = React.createClass({

    getDefaultProps () {
        return ({
            article: null
        })
    },

    getInitialState () {
        return ({
            article: this.props.article
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
                                <img src={this.state.article.img[0]} />
                            </div>
                            <div className="card-content serviceContentParagraph">
                                <span className="card-title grey-text text-darken-4" style={{lineHeight : '20px'}}>
                                    <b>{this.state.article.title}</b>
                                </span>
                                { this.state.article.context.map(function(v,i){
                                	if(i == 0)
                                	{
                                		return(
	                                        <p key={i} style={{marginTop : '20px'}}>{v}</p>
	                                    )
                                	}
                                    return(
                                        <p key={i} style={{marginTop : '10px'}}>{v}</p>
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