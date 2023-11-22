## Day 53

What I learnt today:

The difference between a a library and a framework is "Control"
While the developer is in control when calling a method from a library, the inverse is true for a framework.

A framework call the developer code whenever they want to use a method in the framework.

### APIs

Applcation Programming Interfaces, or simply APIs, are constructs made available in programming languages that allow developers create complex functionalities, which will otherwise be hard, more easily. They abstract the code away and let's us focus on creating with them with easier syntax.

Think about driving a car, any car. Imaging having to know the entire mechanics of your car, like how the wheels are connected to steering thing or how the combustion engine work before actually getting behind the wheels and stepping on the gas.

APIs let you use a car knowing only how control the wheels and when to step on the gas. They let you worry about traffic rules and how to get to your destination.

There are tons of codes already implemented in lower-level languages like C, that can easily be written using a higher-level language like JavaScript.

Client-side JavaScript has many APIs available to it that are not part of the language itself, rather they are built on top of the language, providing extra functionality to JavaScript code.

Generally, client-side JS APIs fall into teo categories:

1. Browser APIs: These are built into web browsers and are able to expose data from browser and surrounding computer environment and do useful complex things with it.

2. Third-party APIs: These are not built into the browser by default, and have to be retrieved from somewhere on the Web.

There are a huge number of APIs available in modern browsers ([here's the MDN reference](https://developer.mozilla.org/en-US/docs/Web/API)) that allows us to do a wide variety of things in our code. The most common categories of browser APIs are:

- APIs for manipulating documents
The most obvious example is the DOM API, which allows us to manipulate HTML and CSS.

- APIs that fetch data from the server
These are used to update small sections of a webpage on their own. Imagine we need to update a stock listing or list of available new stories, these APIs, especially the Fetch API, lets us do so without having to reload the entire page.

- APIs for drawing and manipulating graphics
These are widely supported in browsers with the most popular ones being "Canvas and "WebGL". They allow us to programatically updae the data contained in an HTML <canvas> element to create 2D and 3D scenes.

- Apis for audio and video
These allow us to do interesting things with multimedia such as creating custom UI controls for playing audio and video, displaying text tracks like captions and subtitles alng with our video, grabbing video our web camera to be manipulated via a canvas or displayed on someone else's computer in a web conference, or adding effects to audio tracks.

- Device APIs
These enables us to interact with device hardware: for example, accessing the device GPS to find the user's position using the Geolocation API.

- Client-side storage APIs
These enables us to store data on the client-side, so you can create an app that will save its state between page loads, and perhaps even work when the device is offline.