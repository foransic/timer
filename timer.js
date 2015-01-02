var Timer = function(callback, callbackObject) {
	this.callback = callback;
	this.callbackObject = callbackObject;
}

/** 
 * get current time in seconds
 */
Timer.prototype.time = function() {
	return Math.round(new Date().getTime() / 1000);
}

/**
 * increment the elapsed time 
 */
Timer.prototype.tic = function() {
	this.currentTime = this.time();
	this.callback.apply(this.callbackObject, [false]);

	if (this.currentTime > this.endTime) {
		clearInterval(this.timer);
		this.callback.apply(this.callbackObject, [true]);
	}
}

/**
 * return the elapsed time
 */
Timer.prototype.elapsed = function() {
	return this.currentTime - this.startTime;
}

/**
 * return the remaining time
 */
Timer.prototype.remaining = function() {
	return this.endTime - this.currentTime;
}

/**
 * start the timer
 */
Timer.prototype.start = function(duration) {
	var fn = this;
	
	fn.startTime = fn.time();
	fn.endTime = fn.startTime + duration;
	fn.currentTime = fn.startTime;
	
	fn.timer = setInterval(function() { fn.tic(); }, 500);
}

/**
 * pause or resume the timer according to its state
 */
Timer.prototype.togglePause = function() {
	var fn = this;
	
	if (!fn.paused) {
		clearInterval(fn.timer);
		fn.paused = true;
	} else {
		elapsed = fn.time() - fn.currentTime;
		fn.startTime += elapsed;
		fn.endTime += elapsed;
		fn.paused = false;
		fn.timer = setInterval(function() { fn.tic(); }, 500);
	}
}

/**
 * Stop the timer
 */
Timer.prototype.stop = function() {
	clearInterval(this.timer);
	this.endTime = this.time();
}

