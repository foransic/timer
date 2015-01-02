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

4. Every seconds, a call to instance.callback will be made, with a boolean in parameter which if the timer reached the end.


## Usages

start(duration) : start the timer for 'duration' seconds

togglePause() : pause or resume the timer

stop() : stop the timer

remaining() : give remaining seconds

elapsed() : give elapsed seconds


## Copyright

Sources are under MIT licence