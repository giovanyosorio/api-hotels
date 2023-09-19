const url_images = 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5fbf1d95e5msh3f546b1f0bf5c35p16abfcjsna329b33ba65e',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};


async function fetchData(){
    try {
        
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData()

