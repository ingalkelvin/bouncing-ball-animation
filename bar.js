function Bar(color) {

	this.x = 0;
	this.y = 0;
	this.color = color;
	this.rotation = 0;
	this.width = 120;
	this.height = 20;

}

Bar.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 2;
	context.rotate(this.rotation);

	context.fillStyle = this.color;
	context.beginPath();

	
	context.moveTo(-65,-10);
	context.lineTo(65, -10);
	context.lineTo(65, 10);
	context.lineTo(-65, 10);

	context.closePath();
	context.fill();
	context.stroke();

	context.restore();

};

Bar.prototype.getBounds = function() {

   return {

      x: this.x-65,
      y: this.y,
      width: this.width,
      height: this.height
   };
};
