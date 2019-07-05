import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const WordCard = (props) => {
	
	return ( <div className="card">
	<OwlCarousel className="owl-theme text-center"
						loop
						margin={80}
						items={1}
						nav>
		<div className="item text-center h3"> Buna Ziua</div>
		<div className="item text-center h3"> Buna Seara</div>
		<div className="item text-center h3"> Buna Dimineata</div>
		<div className="item text-center h3"> La Revedere</div>
		<div className="item text-center h3"> Ce faceti</div>
		<div className="item text-center h3"> Bine!</div>
		<div className="item text-center h3"> Mergem sus!</div>
		<div className="item text-center h3"> Mergem Jos</div>
		<div className="item text-center h3"> CSF</div>
		<div className="item text-center h3"> {props.words}</div>
	</OwlCarousel>
	
	
	
	
	
	</div>);
	
}

export default WordCard;