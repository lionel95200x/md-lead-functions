// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.
const axios = require('axios')

// exemple http://localhost:3000/.netlify/functions/server/addCalendar?name=rdv&description=une%20description&start=2023-01-01T10:00:00&end=2023-01-01T11:00:00

// Working Date 2022-12-14T10:00:00-00:00
exports.handler = async event => {
    const { name, description, start, end } = event.queryStringParameters


    console.log(event.queryStringParameters)
    const req = await axios.get('https://eo6bf1fgja8meug.m.pipedream.net/', {
        params: {
            name: name || 'RDV 1',
            description: description || "Pas de description pour ce RDV",
            start: start + "-00:00",
            end: end + "-00:00"
        }
    })
    console.log({ req })
    return {
        statusCode: 200,
        body: `Hello Tom le pd`,
    }
}