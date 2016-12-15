// 00:00 digital clock format
function timify(time){
	if(time < 10)
		return "0" + time;
	else
		return "" + time;
}

// seconds to full minutes
function toM(durationS){
	return parseInt(durationS / 60);
}
// seconds to only seconds part
function toS(durationS){
	return durationS % 60;
}
//seconds to full hours
function toH(durationS){
	return parseInt(durationS / 3600);
}

function Timer(container, format, elapsed){
	this.stopped = false;
	this.elapsed = elapsed;
	this.currentTime = 0;
	this.container = container;
	this.format = format;
	this.finished = false;
}

Timer.prototype.start = function start(durationS){

		var mins = timify( toM(durationS) );
		var secs = timify( toS(durationS) );
		var thiss = this;
		if(durationS > -1 && !this.stopped){

			console.log(this.elapsed)
			var s = ++this.elapsed;

			if(this.format === "litteral"){
					this.container.text( toH(s) + " hours " + toM(s) + " minutes");
			}
			else if(this.format === "digital"){
				this.container.text( mins + ":" + secs );	
			}

			setTimeout(function(){	
				thiss.start(durationS-1);	
			},1000)
		}
		else{
			this.finished = true;
			this.currentTime = durationS;
			return;
		}
}

Timer.prototype.stop = function(){
	this.stopped = true;
}

Timer.prototype.continue = function(){
	console.log("works")
	this.finished = false;
	this.stopped = false;
} 