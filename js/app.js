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
}

//render the table
// Store.prototype.render = function() {
// }

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
//var pike = new Store('1st and Pike', 23, 65, 6.3);

//call the header row first
makeHeaderRow();

//call the functions
// pike.render();

// var pike = {
//   name: '1st and Pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookie: 6.3,
//   avgCookiePerHour: [],
//   totalCookiesPerHour: function() {
//     //find random number of customers per hour.
//     for(var i = 0; i < hours.length - 1; i++) {
//       var total = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       //multiply value by avgCookie to find cookies per hour for the store
//       this.avgCookiePerHour.push(Math.ceil(total * this.avgCookie));
//     }
//     this.totalCookiesPerStore();
//   },
//   totalCookiesPerStore: function() {
//     var total = 0;
//     for(var i = 0; i < hours.length - 1; i++) {
//       total += this.avgCookiePerHour[i];
//     }
//     this.avgCookiePerHour.push(total);
//   },
//   render: function() {
//     var divEl = document.getElementById('store-container');
//     this.totalCookiesPerHour();
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = this.name;
//     divEl.appendChild(ulEl);
//     for(var i = 0; i < this.avgCookiePerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var seaTac = {
//   name: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookie: 1.2,
//   avgCookiePerHour: [],
//   customerPerHour: function() {
//     for(var i = 0; i < hours.length - 1; i++) {
//       var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
//     }
//     this.totalCookiesPerStore();
//   },
//   totalCookiesPerStore: function() {
//     var total = 0;
//     for(var i = 0; i < hours.length - 1; i++) {
//       total += this.avgCookiePerHour[i];
//     }
//     this.avgCookiePerHour.push(total);
//   },
//   render: function() {
//     var divEl = document.getElementById('store-container');
//     this.customerPerHour();
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = this.name;
//     divEl.appendChild(ulEl);
//     for(var i = 0; i < this.avgCookiePerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookie: 3.7,
//   avgCookiePerHour: [],
//   customerPerHour: function() {
//     for(var i = 0; i < hours.length - 1; i++) {
//       var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
//     }
//     this.totalCookiesPerStore();
//   },
//   totalCookiesPerStore: function() {
//     var total = 0;
//     for(var i = 0; i < hours.length - 1; i++) {
//       total += this.avgCookiePerHour[i];
//     }
//     this.avgCookiePerHour.push(total);
//   },
//   render: function() {
//     var divEl = document.getElementById('store-container');
//     this.customerPerHour();
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = this.name;
//     divEl.appendChild(ulEl);
//     for(var i = 0; i < this.avgCookiePerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookie: 2.3,
//   avgCookiePerHour: [],
//   customerPerHour: function() {
//     for(var i = 0; i < hours.length - 1; i++) {
//       var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
//     }
//     this.totalCookiesPerStore();
//   },
//   totalCookiesPerStore: function() {
//     var total = 0;
//     for(var i = 0; i < hours.length - 1; i++) {
//       total += this.avgCookiePerHour[i];
//     }
//     this.avgCookiePerHour.push(total);
//   },
//   render: function() {
//     var divEl = document.getElementById('store-container');
//     this.customerPerHour();
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = this.name;
//     divEl.appendChild(ulEl);
//     for(var i = 0; i < this.avgCookiePerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var alki = {
//   name: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookie: 4.6,
//   avgCookiePerHour: [],
//   customerPerHour: function() {
//     for(var i = 0; i < hours.length - 1; i++) {
//       var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
//     }
//     this.totalCookiesPerStore();
//   },
//   totalCookiesPerStore: function() {
//     var total = 0;
//     for(var i = 0; i < hours.length - 1; i++) {
//       total += this.avgCookiePerHour[i];
//     }
//     this.avgCookiePerHour.push(total);
//   },
//   render: function() {
//     var divEl = document.getElementById('store-container');
//     this.customerPerHour();
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = this.name;
//     divEl.appendChild(ulEl);
//     for(var i = 0; i < this.avgCookiePerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// pike.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
