var React = require('react');

const News = React.createClass({

	getDefaultProps () {
		return({
			newsData: [
				{
					title: 'BREEZE SETS A NEW GUINNESS WORLD RECORD',
					context: [
						'Breeze detergent has set a new Guinness world record that proves its superior washing power over its rivals.',
						'With Activations Advertising leading a massive logistical and operational undertaking...'
					],
					img: 'img/news/breeze.png'
				},
				{
					title: 'A NEW ULTIMATE BANDKADA IS FINALLY CROWNED',
					context: [
						'Breeze detergent has set a new Guinness world record that proves its superior washing power over its rivals.',
						'With Activations Advertising leading a massive logistical and operational undertaking...'
					],
					img: 'img/news/barkada.png'
				},
				{
					title: <span>FOR THE PHILIPPINE&rsquo;S MOST BEAUTIFUL FACES</span>,
					context: [
						'Breeze detergent has set a new Guinness world record that proves its superior washing power over its rivals.',
						'With Activations Advertising leading a massive logistical and operational undertaking...'
					],
					img: 'img/news/ponds.png'
				},
				
			]
		})
	},

	getInitialState () {
		return({
			newsData: this.props.newsData
		})
	},

    componentDidMount () {
        
    },

    handleClick() {
        
    },

    handleMouseEnter(e) {
		$(this.refs[e]).find('.card-image').animate({backgroundSize: '110%'}, 60);
    	$(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up').addClass('buttonHoverAnimate');
    },

    handleMouseLeave(e) {
		$(this.refs[e]).find('.card-image').animate({backgroundSize: '100%'}, 60);
    	$(this.refs[e]).find('.card-action').children('a').removeClass('buttonHoverAnimate').addClass('hide-on-med-and-up');
    },

    render() {
        return(
            <div className="section">

				<div className="screenImageHeight section valign-wrapper">
					<div className="container center-align">
						<img className="responsive-img" src="img/news.png" />
					</div>
				</div>

				<div>
					<div className="container">
						<div className="row">
						{ this.state.newsData.map(function(v,i) {
							return(
								<div 
									key={i} 
									ref={i}
									className="col s12 m4 l4"
									onMouseEnter={this.handleMouseEnter.bind(this, i)} 
									onMouseLeave={this.handleMouseLeave.bind(this, i)}
								>
									<div className="card large z-depth-0">
										<div 
											className="card-image"
											style={{
														backgroundImage: 'url('+v.img+')',
														backgroundSize: '100%',
														backgroundPosition: 'center'
											}} 
										>
											<img 
												className="responsive-img"
												src={v.img}
												style={{opacity: 0}}
											/>
											<span className="card-title"></span>
										</div>
										<div className="">
											<div className="center-align">
												<h5>{v.title}</h5>
											</div>
											{ v.context.map(function(v,i){
												return(
													<p key={i}>{v}</p>
												)
											})}
										</div>
										<div className="card-action center-align">
											<a className="btn z-depth-0 hide-on-med-and-up">Read more</a>
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

module.exports = News;