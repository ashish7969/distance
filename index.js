var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  
  var p1 = q.p1;
  var n1 = p1.split(",");
  var p2 = q.p2;
  var n2 = p2.split(",");
  var lat1 = n1[0];
  var lat2 = n2[0];
  var lon1 = n1[1];
  var lon2 = n2[1];
  
  var p = 0.017453292519943295;    
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  var dist = 12742 * Math.asin(Math.sqrt(a)); 
	
  res.end(String(dist));
}).listen(process.env.PORT || 5000);
