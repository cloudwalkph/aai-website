var React = require('react');

const News = React.createClass({

	getInitialState () {
		return({
			articleData: this.props.articleData
		})
	},

    componentDidMount () {
        
    },

    handleClick(v) {
		this.props.getArticle(v);
    },

    handleMouseEnter(e) {
		$(this.refs[e]).find('.card-image').animate({backgroundSize: '110%'}, 60);
    	$(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up');
    },

    handleMouseLeave(e) {
		$(this.refs[e]).find('.card-image').animate({backgroundSize: '100%'}, 60);
    	$(this.refs[e]).find('.card-action').children('a').removeClass('buttonHoverAnimate').addClass('hide-on-med-and-up');
    },

    render() {
        return(
            <div className="section">

				<div className="section valign-wrapper">
					<div className="container center-align">
						<img className="responsive-img" src="img/news.png" />
					</div>
				</div>

				<div className="hide-on-med-and-down">
					<div className="container">
						<div className="row">
						{ this.state.articleData.map(function(v,i) {
							return(
								<div 
									key={i} 
									ref={i}
									className="col s12 m4 l4"
									onMouseEnter={this.handleMouseEnter.bind(this, i)} 
									onMouseLeave={this.handleMouseLeave.bind(this, i)}
									onClick={this.handleClick.bind(this, v)}
								>
									<div className="card z-depth-0">
										<div className="card-image">
											<img 
												className="responsive-img"
												src={v.imgFront}
											/>
											<span className="card-title"></span>
										</div>
										<div className="card-content serviceContentParagraph">
											<div className="left-align">
												<h5 
													style={{textTransform: 'uppercase',fontFamily : 'Gotham Medium'}}>{v.title}</h5>
											</div>
											<div>
												<p className="left-align">{v.context[0]}</p>
											</div>
										</div>
										<div className="card-action center-align" style={{border : 'none'}}>
											<a 
												className="btn z-depth-0 hide-on-med-and-up"
											>Read more</a>
										</div>
									</div>
								</div>
							)
						}.bind(this))}
						</div>
					</div>
				</div>

				{/*MOBILE VIEW*/}
				<div className="hide-on-large-only">
					<div className="container">
						<div className="row">
						{ this.state.articleData.map(function(v,i) {
							return(
								<div 
									key={i} 
									className="col s12 m4 l4"
									onClick={this.handleClick.bind(this, v)}
								>
									<div className="section">
										<img 
											className="responsive-img"
											src={v.imgFront}
										/>
									</div>
									<div className="section serviceContentParagraph">
										<div className="left-align">
											<h5
												style={{textTransform: 'uppercase',fontFamily: 'Gotham Medium'}}>{v.title}</h5>
										</div>
										<div>
											<p>{v.context[0]}</p>
										</div>
									</div>
									<div className="section left-align">
										<a 
											className="btn z-depth-0 hide-on-med-and-up"
										>Read more</a>
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

module.exports = News;