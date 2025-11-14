class Pelota{
	constructor(){
		this.diam = random(10, 100);
		this.rad = this.diam /2;

		this.posx = random(this.rad, width - this.rad);
		this.posy = random(this.rad, height - this.rad);

		this.velx = random(-5, 5);
		this.vely = random(-5, 5);

	}

	actualizar(){
		if(this.posx > width - this.rad || this.posx < this.rad){
			this.velx *= -1;
		}	

		if(this.posy > height - this.rad || this.posy < this.rad){
			this.vely *= -1;
		}
		
		this.posx += this.velx;
		this.posy += this.vely;
	}

	visualizar(){
		fill("#ea5646");
		stroke("#e8c8a7");
		strokeWeight(2);
		circle( this.posx, this.posy, this.diam);

		
   
		fill("#e73863");
		stroke("#e8c8a7");
		strokeWeight(2);
		ellipse(this.posx, this.posy, this.diam * 1.5, this.diam * 0.5);
		
		
		
		fill("#f5a94b");
		stroke("#e8c8a7");
		strokeWeight(2);
    	ellipse(this.posx, this.posy, this.diam * 0.5, this.diam * 1.5);

	}
}