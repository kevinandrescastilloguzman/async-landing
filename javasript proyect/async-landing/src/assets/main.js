const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '66b4ee44efmshcc272a7edc28655p1bde61jsn8a1bf21b0939',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}