## Untangled P5 Template Project

For the Untangled 'step by step task' guide please go [here](https://github.com/neontribe/untangled-template/wiki/Untangled-Step-by-Step-task)

### To run the Project

In your terminal window type:

```
git clone git@github.com:neontribe/untangled-template.git
cd untangled-template
npm install
npm run dev
```
The last command will start [browser-sync](https://browsersync.io/) which will allow you to run the project in your browser. Your terminal will tell you the address of your sketch, it will look something like this:
```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
```
Your browser should open your sketch in a new tab automatically. If for any reason the window closes, copy and paste this address into your browser and you should see your sketch.

If a window opens, but you don't see your sketch, hit f12 or right-click and select 'inspect' in your browser window and look for error messages in your console.

---
### To add a library

You can find libraries that work with p5.js [here](https://p5js.org/libraries/)

Of course you can install any other library you like like [Tone.js](https://tonejs.github.io/) or [Matter](http://brm.io/matter-js/)

You can do this either by importing the library files directly into your project or by installing via [NPM](https://www.npmjs.com/)

### Working with audio

If you are using audio, you might get a message in your dev tools console (f12) that looks something like this:

```
Context.js:15 The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
```
A simple way around this is to install [unmute](https://www.npmjs.com/package/unmute) using
```
npm install unmute
```

Add a mute button to your sketch by including the following lines of code at the top of your sketch js file:
```
import UnmuteButton from 'unmute'

UnmuteButton()
````