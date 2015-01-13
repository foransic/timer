timer
=====

Simple &amp; lightweight javascript timer


## Get started

1. Include timer.min.js wherever you need it.

2. Create a Timer instance :

```javascript
	timer = new Timer(<callback>, <instance>);
```

3. Call the timer.start(duration) function.

4. Every seconds, a call to instance.callback will be made, with a boolean in parameter which indicates if the timer reached the end.


## Usages

`timer.start(duration)` start the timer for 'duration' seconds

`timer.togglePause()` pause or resume the timer

`timer.stop()` stop the timer

`timer.remaining()` give remaining seconds

`timer.elapsed()` give elapsed seconds


## Copyright

Sources are under MIT licence
