import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import snow from '../assets/snow.png'




class WeatherCard extends Component {

    componentDidMount(){
      this.props.getWeather();
    }

	


    render(){
		const props = this.props;
		
		return(
            <div className="weather-component card">
             
                <div className="weather-box">
				<div className="currentweather-box">
                    <div className="row">
                    <div className="col-12 city-name-container">
                        <h4 className="text-center city-name">{this.props.weatherData.city}</h4>
                    </div>
                    <div className="col-12 date-container"><p className="text-center lead date">{this.props.weatherData.date}</p></div>
                    <div className="col-8 mx-auto image-container"></div>
                    <div className="col-12 degree-container">
                      <h2 className="weather-degrees text-center"> {parseFloat(this.props.weatherData.temperature - 273).toFixed(0)}&deg;C</h2>
                    </div>
                    <div className="col-12 condition-container">
                      <p className="weather-condition text-center">{this.props.weatherData.condition}</p>
                    </div>
                    </div>
				</div>
		<div className="futureWeather-box">
			<OwlCarousel className="owl-theme text-center"
						loop
						margin={80}
						items={4}
						nav >
				
				<div className="item"><img src={snow} alt={"snow"} /></div>
				<div className="item"><img src={snow} alt={"snow"} /></div>
				<div className="item"><img src={snow} alt={"snow"} /></div>
				<div className="item"><img src={snow} alt={"snow"} /></div>
				<div className="item"><img src={snow} alt={"snow"} /></div>
					
			</OwlCarousel>
					
					
		</div>		
				
                </div>
            </div>
        )
    }
}

export default WeatherCard;