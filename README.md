# web-worker-example
An example of how to use web workers in an Angular.js application.

Runs a very heavy task (Creates an array with 100.000.000 numbers, then iterates over all of them and chooses the ten smallest, then lists them out). The GUI shows buttons with two options, one which runs the task the "normal" way (without workers), and one with web workers. If you are in a browser which runs on a single thread, the entire browser will be come unresponsive while the task runs in the first option. Chrome will not, as it is multi-threaded, but the page will be unresponsive. 

Depending on the computer, the operation can potentially take a very long time..
