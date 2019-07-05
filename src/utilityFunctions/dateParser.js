



const dateParser = (date_text) => {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
	var dateObject = new Date(date_text);
	var day = dateObject.getDate();
	var month = months[dateObject.getMonth()];
	var year = dateObject.getFullYear();
	var finalDate = day +" "+ month + ", " + year;
	return finalDate;
}


export default dateParser;