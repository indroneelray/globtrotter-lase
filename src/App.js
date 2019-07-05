import React, {Component} from 'react';
import Weather from './components/WeatherCard';
import Currency from './components/CurrencyCard';
import WeatherFetcher from './utilityFunctions/WeatherFetcher.js'
import LocationFetcher from './utilityFunctions/LocationFetcher.js'
import WordCard from './components/WordCard'



const API =  'e818e840b7b49638dbaeb114f787da9b';
const API_CURRENCY = '597812aa726e72d25a7fb946ba468f1c';


class App extends Component {
	constructor(){
		super();
		
		this.state = {
    weather: {
      city: undefined,
      temperature: undefined,
      conditon: undefined,
	  date: undefined,
	  listData: []
    },
    currency:{
      homeCurrency: undefined,
      foreignCurrency: undefined,
      baseCurrency: undefined,
      amount: undefined,
      variableForeign: undefined
    },
	words:[ "Hello",
		   "Bye Bye",
		   "See you"]
  }
  
}



	
  
	
  
  getWeather = async () => {
	  const weatherData = await WeatherFetcher(API, [26.111275,44.4191693]);
	  console.log(weatherData);
	  console.log(weatherData.listData[1]);

	  
      this.setState({
        weather:{
          city: weatherData.city,
           temperature: weatherData.degrees,
           condition: weatherData.condition,
			date: weatherData.date,
			listData: weatherData.listData
		   }
      });
    }
	
	
	refreshWeather = () => {
			setTimeout(this.getWeather, 100000);
	}

    callCurrencyAPI = async () => {
      const api_call = await fetch(`http://data.fixer.io/api/latest?access_key=${API_CURRENCY}`);
      const data = await api_call.json();
      console.log(data);
      return data;
    }
	
    getCurrency = async (amount) => {
      const data =await this.callCurrencyAPI();
      const homeCurrency = parseFloat(data.rates.RON).toFixed(2);
      const foreignCurrency = parseFloat(data.rates.AED).toFixed(2);
      const baseCurrency = parseFloat(data.rates.EUR).toFixed(2);
      this.setState({
        currency:{
          homeCurrency: homeCurrency,
          foreignCurrency: foreignCurrency,
          baseCurrency: baseCurrency,
          amount: amount,
          variableForeign: foreignCurrency*amount,
     
        }
      });
      console.log(homeCurrency, foreignCurrency, baseCurrency);
    }


    amountInputHandler = (e) => {
      e.preventDefault();
        this.getCurrency(e.target.value);
        //console.log(this.state.currency.amount*parseFloat(this.state.currency.foreignCurrency).toFixed(2));
    }

  render(){
    return(
      <div className="app-component">
         <h1 className="text-center"> Welcome To Globtrotter!</h1>
	
         <Weather getWeather = {this.getWeather} weatherData = {this.state.weather}/>
        
		<Currency getCurrency = {this.getCurrency}
                                handleChange = {this.amountInputHandler}  
                                homeCurrency = {this.state.currency.homeCurrency}
                                 foreignCurrency = {this.state.currency.foreignCurrency}
                                 baseCurrency = {this.state.currency.baseCurrency}
                                 amount = {this.state.currency.amount}
                                 variableForeign = {this.state.currency.variableForeign}
                                />
		
		<WordCard words={"Licenta"} />
		<LocationFetcher/>
      </div>
    )
  }
}

export default App;