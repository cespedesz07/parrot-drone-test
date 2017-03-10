var arDrone = require('ar-drone');
var client  = arDrone.createClient();

// rightCorrection = function(this){
// 	this.right(0.06);
//   	this.left(0.04);
//   	this.stop();
// };

client.takeoff(); //3 secs

client
  .after(3000, function() {
  	this.up(0.5);
  	this.front(0.05);
  })
  .after(500, function(){
	this.stop();
  	this.back(0.04)
  	this.stop();
  })
  .after(500, function(){
  	this.right(0.06);
  	this.left(0.04);
  	this.stop();
  })
  .after(500, function(){
  	this.front(0.1);
  })
   .after(4000, function(){
  	this.right(0.07);
  	this.left(0.04);
  	this.stop();
  })
   .after(500, function(){
   	this.front(0.1);
   })
   .after(2000, function(){
	this.stop();
  	this.back(0.8)
  	this.stop();
  })
   .after(1000, function(){
   	this.counterClockwise(0.5);
   })
   .after(2000, function(){
   	this.stop();
  	this.land();
  });