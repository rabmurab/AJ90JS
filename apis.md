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

#### Browser APIs

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

#### Third-Party APIs

Many large websites and services provide APIs that are not built into the browser, allowing developers to make use of their data or services.

One of the most obvious exmples of this is using mapping to display custom maps on pages.

Let's look at the example below to illustrate how we use third-party APIs.

As we know already, third-party APIs are not built into the web browser so we can't just begin to use them like we do browser APIs. To access them from JavaScript, we need to first connect to the API functionality and make it available on our page.

To make this happen, we typically need to first link to a JavaScript library available on the server via the `<script>` element, as seen below:

```js
<script
    src="https://api.mcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
    defer></script>

<link
    rel="stylesheet"
    href="https://api.mqcdn.com/sdk/mapuest-js/v1.3.2/mapquest.css" />
```

After this, we can now start making use of the ibjects available in that library. For example:

```js
const map = L.mapquest.map("map", {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
});
```

In this above, we are creating a variable to store the map information in, then creating a new map using th `mapquest.map()` method, which takes as its parameters the ID of a `<div>` element we want to display the map in ('map'), and an options object containing the details of the particular map we want to display. In this case we specify the coordinates of the center of the map to show (created using the `mapquest.tileLayer()` method), and the default zoom level.

This is all the information the Mapquest API needs to plot a single map. The server we are connecting to handles all the complicated stuff, like displaying the correct map tiles for the area being shown, etc.

##### Permission and Security

Third-party APIs tend to use developer keys to allow developers access to the API functionality, which is more to protect the API vendor than the user

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

This line specifies an API or developer key to use in an application. The developer must apply to get a key, and then include it in their code to be allowed access to the API's functionality. In the above example, there's only aplaceholder.

Other APIs may require that we include the key in a slightly different way, but the pattern is relatively similar for most of them.

Requiring a key enables the API vendor to hold users accountable for their actions. When the developer has registered for akey, they are then known to the API provider, and action can be taken if they start to do malicious things with the API. The easiest action is to revoke their API privileges.

After getting our key, we can do some interesting things to the map. 

To change the type of our map, we change the `'map'` in the `layers` property below to a variety of options.

```js
layers: L.mapquest.tileLayer("map");
```

Some of the options we can choose from are: `'hybrid'`, `'satelite'`, `'dark'` and `'light'`.

In addition to changing the type of our map, we can also add different controls. The map has a different number of controls available, by default, it just shows a zoom control. We can add the controls available using the `map.addControl()` method.

```js
map.addControl(L.mapquest.control());
```

When we add this line to our code, it creates a simple full-featured control set, and it is placed in the top-right-hand corner by default. We can adjust the position by specifying an options object as a parameter for the control containing a `position` property, the value of which is a string specifing a position for the control.

```js
map.addControl(L.mapquest.control({position: "bottomright"}));
```

This isn't the only type available and there are a variety of them like `mapquest.searchControl()` and `mapquest.satelliteControl()`.

We can also add a custom marker (icon) at certain points in our code relatively easily. To do this, we use the `L.marker()` method. It takes two parameters, an array containing the coordinates at which to display the marker, and an options object containing an `icon` property that defines the icon to display at that point.

The icon iks defined using an `mapquest.icons.marker()` method, which contains information such as color and size of marker.

We can chain to the end of this method, a `bindPopup()`, which defines content to display when the marker is clicked.

See what this looks like in code:

```js
L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
        primaryColor: "#22407F",
        secondaryColor: "#3B5998",
        shadow: true,
        size: "md",
        symbol: "A",
    }),
})
    .bindPopup("This is Manchester!")
    .addTo(map);
```

The last method in this example, `.addTo()` method, is what actually add the marker to the map.