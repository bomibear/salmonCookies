'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
var storeTable = document.getElementById('store-table');
var tossersTable = document.getElementById('tossers-table');

var Store = function(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  allStores.push(this);
  this.cookiePerHourPerStoreArray = [];
  this.numberOfCustomersArray = [];
  this.tossersArray = [];
  this.cookiesPerHourPerStore();
  this.cookiesPerStore();
  this.cookiesAtEachHour = [];
  this.tossersCalculation();
};

Store.prototype.cookiesPerHourPerStore = function() {
  for(var i = 0; i < hours.length; i++) {
    //find random number of customers per hour.
    var total = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    this.numberOfCustomersArray.push(total);
    //multiply value by avgCookie to find cookies per hour for the store
    this.cookiePerHourPerStoreArray.push(Math.ceil(total * this.avgCookie));
  }
};

Store.prototype.tossersCalculation = function () {
  //using projected sales information:
  var projectedSales = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  var totalTossers = 0;
  var minTossers = 2;
  for(var i = 0; i < this.numberOfCustomersArray.length; i++) {
    this.numberOfCustomersArray[i] = Math.ceil(this.numberOfCustomersArray[i] * projectedSales[i]);
  }

  for(var j = 0; j < this.numberOfCustomersArray.length; j++) {
    var tossersNeeded = Math.ceil(this.numberOfCustomersArray[j]/20);
    if(tossersNeeded <= 1) {
      this.tossersArray.push(minTossers);
      totalTossers += minTossers;
    } else {
      this.tossersArray.push(tossersNeeded);
      totalTossers += tossersNeeded;
    }
  }
  this.tossersArray.push(totalTossers);
};

//calculate total for each store
Store.prototype.cookiesPerStore = function() {
  var total = 0;
  for(var i = 0; i < hours.length; i++) {
    total += this.cookiePerHourPerStoreArray[i];
  }
  this.cookiePerHourPerStoreArray.push(total);
};

//make a table row for each store's data
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  trEl.textContent = this.name;
  storeTable.appendChild(trEl);

  for(var i = 0; i < this.cookiePerHourPerStoreArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiePerHourPerStoreArray[i];
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
  for(var i = 0; i <= hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  //append hours to the dom
  storeTable.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  trEl.textContent = 'Total';
  storeTable.appendChild(trEl);
  var tdEl = document.createElement('td');
  var hourlyTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].cookiePerHourPerStoreArray[i];
    }
    hourlyTotal += total;
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = hourlyTotal;
  trEl.appendChild(tdEl);
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
makeFooterRow();

//Tossers
function makeTossersHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  //append hours
  for(var i = 0; i <= hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  //append hours to the dom
  tossersTable.appendChild(trEl);
}

makeTossersHeaderRow();

Store.prototype.renderTossers = function () {
  var trEl = document.createElement('tr');
  trEl.textContent = this.name;
  storeTable.appendChild(trEl);

  for(var i = 0; i < this.tossersArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.tossersArray[i];
    trEl.appendChild(tdEl);
  }
  tossersTable.appendChild(trEl);
};

function makeTossersFooterRow() {
  var trEl = document.createElement('tr');
  trEl.textContent = 'Total';
  storeTable.appendChild(trEl);
  var tdEl = document.createElement('td');
  var hourlyTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].tossersArray[i];
    }
    hourlyTotal += total;
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = hourlyTotal;
  trEl.appendChild(tdEl);
  tossersTable.appendChild(trEl);
}

pike.renderTossers();
seaTac.renderTossers();
seattleCenter.renderTossers();
capitolHill.renderTossers();
alki.renderTossers();

makeTossersFooterRow();
