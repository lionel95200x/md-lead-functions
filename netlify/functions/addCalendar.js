// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.
const axios = require('axios')

exports.handler = async event => {

    axios.get('https://eo6bf1fgja8meug.m.pipedream.net/', {
        params: {
            name: "RDV",
            description: "mon evenment",
            start: "2022-12-14T10:00:00-00:00",
            end: "2022-12-14T11:00:00-00:00"
        }
    })
    return {
        statusCode: 200,
        body: `Hello TOm le pd`,
    }
}