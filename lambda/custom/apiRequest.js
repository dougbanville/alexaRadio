var https = require('https'); 

module.exports = {
    httpsGet: function(url, callback) {
        var options = {
            host: 'feeds.rasset.ie',
            path: '/livelistings/listing/?channelid=9&output=json',
        };
    
        var req = https.request(options, res => {
            res.setEncoding('utf8');
            var responseString = "";
            
            //accept incoming data asynchronously
            res.on('data', chunk => {
                responseString = responseString + chunk;
            });
            
            //return the data when streaming is complete
            res.on('end', () => {
                console.log(responseString);
                callback(responseString);
            });
    
        });
        req.end();
    },
    
    getSchedule: function(){
    
        httpsGet("https://feeds.rasset.ie/livelistings/listing/?channelid=9&output=json",r=>{
        //console.log(r);
        let results = JSON.parse(r);
        return JSON.parse(r);
        })
    
    },
    
    
    httpGet: function(host,path,qs){
        return new Promise(((resolve, reject) => {
            var options = {
                host: host,
                path: path,
                qs: qs,
                method: 'GET',
            };
    
            const request = https.request(options, (response) => {
                response.setEncoding('utf8');
                let returnData = '';
    
                response.on('data', (chunk) => {
                    returnData += chunk;
                });
    
                response.on('end', () => {
                    resolve(JSON.parse(returnData));
                });
    
                response.on('error', (error) => {
                    reject(error);
                });
            });
            request.end();
        }));
    }
}
