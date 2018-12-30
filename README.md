# Plant Nanny
The goal of this application is to monitor the environment surrounding a potted plant. It consists of a Node/Express.js API and a Vue.js-based front end.

### Backend functionality
The API has three routes:
* `'/api/v1/'` the api root returns an object describing the different sensors and their properties with links to their access points.
* `'/api/v1/air'`  returns historical data from a DHT22 sensor. The sensors is read every hour and saved to the database for this purpose.
*  `'/api/v1/soil'`  also resturns historical data but from a LM393 dirt moisture sensor. It is also read every hour and saved to the database.

It’s also possible to connect a web socket to the root of the page ([Plant Nanny](http://micaelpersson.asuscomm.com/)). The sensors are read every couple of seconds and pushed to the client.
 
### Frontend
The front end is built with Vue.js and shows some information and graphs downloaded from the API. It consists of three components.
#### Live data
This component shows the latest data from the API’s web socket. It updates automatically when an event has been received.

![Image of Live data component](img/1.png?raw=true "Live data")

#### Air data
This component shows a graph of the air data from the last 24 hours. You can see the temperature and humidity levels of the air.

![Image of Air data component](img/2.png?raw=true "Air data")

#### Soil data
This component shows a graph of the soil data from the last 24 hours. You can see the moisture/dryness level in the soil. I had a lot of trouble getting correct values from the sensor. I just today figured out that the sensor return high values when it’s dry and low values when it’s wet. A high dryness % means it’s very dry and a low % means it’s very wet. 

![Image of Soil data component](img/3.png?raw=true "Soil data")

## Web of things
The application is built with the direct integration pattern in mind. The sensors connect directly to a Raspberry Pi 3 which hosts the client and HTTP server. 
Since the application just reads data it seemed overkill to make the api design  as general and complex as they did in the course literature so I opted for a simpler version. 

In the API root the ”thing”, the plant can be accessed. It describes the thing, what the properties are, links to access them, which should make it somewhat machine readable.

In the book they talk about different layers for the web of things:
1. Access
2. Find
3. Share
4. Compose

I think I’ve implemented the access layer by building the API, the compose layer by building the vue.js front end and the find layer (very basic) by having some discoverability in the describing object.
The share layer fell to the side in the fight with time but I was planning to make the application use https at least, I’ve been meaning to try let’s encrypt for a while.

## Personal reflections
I feel this was a very challenging but fun exercise, it’s interesting when you can interact with the real world instead of just coding with abstract data.  I learned a lot and got to use a lot of different techniques such Socket.io and Vue.js, also great with more experience in Node/Express.js. 
Everything surrounding the hardware, sensors and raspberry pi was very new to me and took a lot of trial and error. I feel I ”wasted” to much time there, I think I spent at least two days just getting the values from the soil sensor but because of that I didn’t get as much time to implement features I wanted, like being able to pick ranges for the graphs in the client or maybe simulating automatic watering by turning on one of my hue lamps when the plant gets dry.
It could’ve interesting to have something that could’ve been interacted with through the client, turning on a air moisturizer to raise the humidity or just a led lamp but I couldn’t find any reason for it in the context of my application.

So to sumarize:

Postives:
* Fun and interesting.
* Learned a lot.
* Will probably take the code I’ve made now and rework it to keep a specific humidity in my apartment so my skin will thank me during the winter.

Negatives: 
* Time constraints
