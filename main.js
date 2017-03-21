/********************************
DOM VARIABLES
********************************/

var foodCards = document.getElementById("foodCards");
var catFoodCards = document.getElementById("catFoodCards");

/********************************
MAKE DOG DOM CARDS
********************************/
function makeDogCards (xhrData) {
	foodString = '';
	for (var x = 0; x < xhrData.dog_brands.length; x++) {
		productInfo = xhrData.dog_brands[x];
		foodString += `<div class="card"><div class="brand"><h3>${productInfo.name}</h3></div>`;
		for (var z = 0; z < productInfo.types.length; z++) {
			foodString += `<div class="types"><h4>${productInfo.types[z].type}</h4>`;
			for (var a = 0; a < productInfo.types[z].volumes.length; a++) {
				foodString += `<hr><p>Volumes: ${productInfo.types[z].volumes[a].name}</p>`;
				foodString += `<p>Price: ${productInfo.types[z].volumes[a].price}</p>`;
			}
			foodString += `</div>`
		}
		foodString += `</div>`
	}
	foodCards.innerHTML = foodString;
}

/********************************
MAKE CAT DOM CARDS
********************************/

function makeCatCards (xhrData) {
	foodString = '';
	for (var x = 0; x < xhrData.cat_brands.length; x++) {
		productInfo = xhrData.cat_brands[x];
		foodString += `<div class="card"><div class="brand"><h3>${productInfo.name}</h3></div>`;
		for (var z = 0; z < productInfo.types.length; z++) {
			foodString += `<div class="types"><h4>${productInfo.types[z].type}</h4>`;
			for (var a = 0; a < productInfo.types[z].volumes.length; a++) {
				foodString += `<hr><p>Volumes: ${productInfo.types[z].volumes[a].name}</p>`;
				foodString += `<p>Price: ${productInfo.types[z].volumes[a].price}</p>`;
			}
			foodString += `</div>`
		}
		foodString += `</div>`
	}
	catFoodCards.innerHTML = foodString;
}





/********************************
FUNCTION TO RUN WITH DOG JSON
********************************/
function productCheckDog () {
	var data = JSON.parse(this.responseText);
	makeDogCards(data);
}
/********************************
FUNCTION TO RUN WITH CAT JSON
********************************/
function productCheckCat () {
	var data = JSON.parse(this.responseText);
	makeCatCards(data);
}
/********************************
IF JSON RESPONSE FAILS
********************************/
function productFail () {
	foodCards.innerHTML = "Currently Food Products";
}

/********************************
DOG JSON FILE REQUEST
********************************/
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", productCheckDog);
myRequest.addEventListener("error", productFail);
myRequest.open("GET", "dog.json");
myRequest.send();

/********************************
CAT JSON FILE REQUEST
********************************/
var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", productCheckCat);
myRequest2.addEventListener("error", productFail);
myRequest2.open("GET", "cat.json");
myRequest2.send();









