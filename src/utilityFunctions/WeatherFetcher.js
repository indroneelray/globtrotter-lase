import DateParser from './dateParser.js';
const WeatherFetcher = async (weather_api, coordinates) => {
	  let api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${weather_api}`);
      const data = await api_call.json();
      const city = `${data.city.name}, ${data.city.country}`;
	  const listData = data.list;
      const degrees = listData[0].main.temp;
      const condition =  listData[0].weather[0].description;
	  const date = DateParser(listData[0].dt_txt);
	  const weatherDataArray = {'city': city,
							'degrees':degrees,
							'condition':condition,
							'date':date,
							'listData': listData
							};
		
	  return weatherDataArray;
  
}


export default WeatherFetcher;