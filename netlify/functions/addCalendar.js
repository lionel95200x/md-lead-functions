// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.
const axios = require('axios')
const { isMatch } = require('date-fns')

// exemple http://localhost:3000/.netlify/functions/server/addCalendar?name=rdv&description=une%20description&start=2023-01-01T10:00:00&end=2023-01-01T11:00:00

// Working Date 2022-12-14T10:00:00-00:00
const DATE_PATH = "yyyy-MM-dd'T'HH:mm:ss"
exports.handler = async event => {
    const { name, description, start, end } = event.queryStringParameters
    const startMatch = isMatch(start, DATE_PATH)
    const endMatch = isMatch(end, DATE_PATH)
    if (startMatch && endMatch) {
        try {
            const req = await axios.get('https://eo6bf1fgja8meug.m.pipedream.net/', {
                params: {
                    name: name || 'RDV 1',
                    description: description || "Pas de description pour ce RDV",
                    start: start + "-00:00",
                    end: end + "-00:00"
                }
            }).catch(e => console.log({ e }))
            console.log(req)
        } catch (err) {
            console.log(err)
        }
    } else {
        return {
            statusCode: 200,
            body: `Error : ${!startMatch && 'Start date is not valid'} ${!endMatch && 'End date is not valid'}`,
        }
    }

    return {
        statusCode: 200,
        body: `Succes message`,
    }
}