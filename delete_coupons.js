const lineReader = require('line-reader');
const sleep = require('thread-sleep');
const request = require('request');
const https = require('https');
//This will look for a file called coupons.csv in the same folder
lineReader.eachLine('coupons.csv', (line, last) => {
    let id = (line);
    let pathid = '/api/v2/coupons/' + id;
    let options = {
        host: 'HOST NAME GOES HERE',
        path: pathid,
        method: 'DELETE',
        headers: {
            'Authorization': 'CREDENTIALS GO HERE',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    sleep(10);

    https.request(options, (response) => {
        console.log(pathid);
        response.on('end', () => {
            console.log(response);
            });
        }).end();

    if(last){
    console.log('done');
    }
});