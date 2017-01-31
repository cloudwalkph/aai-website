var React = require('react');

const News = React.createClass({

	getDefaultProps () {
		return({
			newsData: [
				{
					'id': 'samsung',
					title: 'AAI Helps Unleash the Power of Samsung',
					context: [
						<span>As one of the biggest names in technology, Samsung showed why it&rsquo;s a leader at innovating every aspect of human life with the Power of Samsung showcase. One of the biggest tech conventions ever done in the Philippines, the Power of Samsung Showcase featured the best products and innovations Samsung has to offer in the realm of Mobile, Consumer Electronics, Audio & Video, Healthcare, Home Technology and Air Conditioning.</span>,
						<span>As the implementing agency, we had the big task to create ways in where Samsung&rsquo;s different divisions can share their message and showcase their best products. Inspired by the honeycomb structure, we divided the venue into different zones where each unit is featured. Each individual zone told the story behind the products and innovations being showcased while allowing visitors to experience the products themselves thru experiential booth.</span>,
						'To keep track of the invited VIPs and dignitaries entering the event, we developed a digital RFID pin that contained the guest’s information and their itinerary for the event. RFID stations located throughout the venue detected pins and showed relevant information to the guests.',
						'The Power of Samsung Showcase was the one day when the whole might of Samsung was apparent for everyone to see and a big reminder of how technology has changed human lives forever.'
					],
					img: [
						'img/uploads/samsung_01.jpg',
						'img/uploads/samsung_02.jpg',
						'img/uploads/samsung_03.jpg'
					],
					imgFront: 'img/uploads/samsung_01.jpg',
				},
				{
					id: 'greenwich',
					title: 'Another Greenwich Ultimate BandKada is Crowned',
					context: [
						<span>Another year, another Ultimate BandKada. For the second year in a row, AAI played a key role in helping find the hottest unsigned rock bands in the country in the Greenwich Ultimate BandKada Search Season 2. </span>,
						<span>A 5-month nationwide search with mall auditions attended by hundreds of hopefuls exposed us to some of the most promising musical talent the country has to offer. After a rigorous narrowing down of contestants, only 8 bands made it to the the big finals night in Valkyrie Club in BGC for a chance to be this year’s Greenwich Ultimate BandKada.</span>,
						<span>The Grand Finals in the Valkyrie lived up to all the hype with all 8 finalists performing in front of fans and judges including UpDharmaDown&rsquo;s Armi Millare. In the end, it was PLETHORA who lifted the crown winning a large cash prize, a recording contract with Viva records and, most importantly, the crown of being The Greenwich Ultimate BandKada.</span>
					],
					img: [
						'img/uploads/greenwich_01.jpg',
						'img/uploads/greenwich_02.jpg',
						'img/uploads/greenwich_03.jpg',
						'img/uploads/greenwich_04.jpg'
					],
					imgFront: 'img/news/barkada.png'
				},
				{
					'id': 'happy-faces',
					title: <span>Happy Skin and Disney Brings out the Princess in Every Girl</span>,
					context: [
						<span>A match that can only be made in a fairy-tale has come true when Happy Skin and Disney collaborated to create an exclusive line of cosmetics inspired by Disney&rsquo;s iconic princess characters.</span>,
						<span>As the lead agency in the launch, AAI created a launch activation at the Power Plant Mall&rsquo;s activity center that featured rich experiences lifted from the stories of Disney&rsquo;s animated hits. The main challenge was to tell the story not just of Disney&rsquo;s characters but also the amazing way Happy Skin created a wonderful line of cosmetic products that made every woman and girl wearing it feel like a real Disney Princess.</span>,
						'Attended by celebrities and fans, the activation was heralded by both Happy Skin and Disney as a shining example of how to fantastic brands can work together, share inspiration and create something truly magical.'
					],
					img: [
						'img/uploads/happy_skin_01.jpg',
						'img/uploads/happy_skin_02.jpg',
						'img/uploads/happy_skin_03.jpg'
					],
					imgFront: 'img/uploads/happy_skin_03.jpg'
				}
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

    handleClick(v) {
		this.props.getArticle(v);
    },

    handleMouseEnter(e) {
		$(this.refs[e]).find('.card-image').animate({backgroundSize: '110%'}, 60);
    	// $(this.refs[e]).find('.card-action').children('a').removeClass('hide-on-med-and-up').addClass('buttonHoverAnimate');
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
									onClick={this.handleClick.bind(this, v)}
								>
									<div className="card medium z-depth-0">
										<div className="card-image">
											<img 
												className="responsive-img"
												style={{height: '158px'}}
												src={v.imgFront}
											/>
											<span className="card-title"></span>
										</div>
										<div className="card-content">
											<div className="center-align">
												<h5 
													className="truncate"
													style={{textTransform: 'uppercase'}}>{v.title}</h5>
											</div>
											<div>
												<p>{v.context[0]}</p>
											</div>
										</div>
										<div className="card-action center-align">
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

            </div>
        )
    }
});

module.exports = News;