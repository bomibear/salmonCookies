'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var allStores = [];
var storeTable = document.getElementById('store-table');

var Store = function(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  allStores.push(this);
  this.avgCookiePerHour = [];
  this.cookiesPerHour();
  this.cookiesPerStore();
};

Store.prototype.cookiesPerHour = function() {
  //find random number of customers per hour.
  for(var i = 0; i < hours.length - 1; i++) {
    var total = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    //multiply value by avgCookie to find cookies per hour for the store
    this.avgCookiePerHour.push(Math.ceil(total * this.avgCookie));
  }
};

//calculate daily total for each store
Store.prototype.cookiesPerStore = function() {
  var total = 0;
  for(var i = 0; i < hours.length - 1; i++) {
    total += this.avgCookiePerHour[i];
  }
  this.avgCookiePerHour.push(total);
};

//make a table row for each store's data
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  trEl.textContent = this.name;
  storeTable.appendChild(trEl);

  for(var i = 0; i < this.avgCookiePerHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookiePerHour[i];
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
};

//make a header with the hours
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  //append hours
  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //append hours to the dom
  storeTable.appendChild(trEl);
}

//create instances of the stores
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//call the header row first
makeHeaderRow();

//call the functions
pike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

//make a footer row
