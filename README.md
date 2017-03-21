# PET FOOD | NSS ASSIGNMENT
##### Working with JSON xhr requests and interacting with the DOM
##### Focus on functionality -> styling minimal to assignment requirements

#### ASSIGNMENT PARAMETERS:
1. THE STORY:
	- You are working as a junior developer team for Acme, Inc. This company sells dog food. Each brand of dog food is represented by an object in an array you get back from the (fictional database) in JSON format.
	- [BOILERPLATE AND SAMPLE CODE WAS PROVIDED FOR THIS ASSIGNMENT]
1. Build a product page that displays all brands with their variations and information
1. Build a cat products JSON that displays along with dog products


#### SAMPLE CODE:
```
//IMPLEMENT XHR REQUEST ON 2 DIFFERENT JSON FILES
//sample of first xhr request:

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", productCheckDog);
myRequest.addEventListener("error", productFail);
myRequest.open("GET", "dog.json");
myRequest.send();

```
#### SAMPLE CODE | Building out the div info:
```
for (var a = 0; a < productInfo.types[z].volumes.length; a++) {
	foodString += "<hr><p>Volumes: " + productInfo.types[z].volumes[a].name + "</p>";
	foodString += "<p>Price:" + productInfo.types[z].volumes[a].price + "</p>";
}
foodString += "</div>"
```

#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#### SCREENSHOT JSON DATA WRITTEN TO DOM
![JSON data written to DOM](https://raw.githubusercontent.com/anessao/petFood/json/Screen%20Shot%202017-03-20%20at%208.58.45%20PM.png)

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS
- JSON
