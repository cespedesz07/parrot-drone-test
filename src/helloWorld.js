var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(5000, function() {
  	//client.left(0.1);
  	client.back(0.2);
  })
  .after(2000, function(){
  	this.stop();
  	this.land();
  });