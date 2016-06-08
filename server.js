/**
 * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('superagent');

var PORT = 8080,
    url = 'https://api.whil.blue',
    endpoint = '/team-pilot',
    authToken = '69e337b8-d2fe-4370-be55-8fd295317719';


app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  var origin = req.headers.origin,
      originHostName = origin && require('url').parse(origin).hostname;
    
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type', 'X-Whil-Csrf, X-Whil-Timestamp, X-Whil-Grow');

  if (req.method == 'OPTIONS') {
    console.log('Encountered OPTIONS');
    return res.sendStatus(200);
  }

  next();
});

app.get('/team', function (req, res, next) {
  console.log('<<< got a GET on /team >>>');
  request
      .get( url + '/team' )
      .query({ whil_token: authToken })
      .end( function( err, result) {
        if (err) console.log(err);
        console.log( result.body );

        res.send( result.body );
      });
});

function massage(body){
    var out = {
        "name": body.name,
        "slug": body.slug,
        "imageUrl": body.imageUrl,
        "domains": String(body.domains).split(","),
        "verifyEmail": body.verifyEmail === "true" ? true:false,
        "sections": String(body.sections).split(","),
        "adminEmail": body.adminEmail,
        "cap": parseInt(body.cap,10),
        "termsAndConditions": body.termsAndConditions === "true" ? true:false,
        "endDate": body.endDate
    };
    return out;

}
app.post('/team', function(req, res, next) {
    var team = massage(req.body);
  request
      .post( url + '/team-pilot' )
      .query({ whil_token: authToken })
      .set('Content-Type', 'application/json')
      .send( team )
      .end( function( err, result) {
        res.send( result.body );
      });
});

app.listen(3000);

console.log('Server started: http://localhost:3000/');
