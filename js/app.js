'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am' , '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  avgCookiePerHour: [],
  customerPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
    }
  },
  render: function() {
    var divEl = document.getElementById('store-container');
    this.customerPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.name;
    divEl.appendChild(ulEl);
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  avgCookiePerHour: [],
  customerPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
    }
  },
  render: function() {
    var divEl = document.getElementById('store-container');
    this.customerPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.name;
    divEl.appendChild(ulEl);
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  avgCookiePerHour: [],
  customerPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
    }
  },
  render: function() {
    var divEl = document.getElementById('store-container');
    this.customerPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.name;
    divEl.appendChild(ulEl);
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  avgCookiePerHour: [],
  customerPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
    }
  },
  render: function() {
    var divEl = document.getElementById('store-container');
    this.customerPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.name;
    divEl.appendChild(ulEl);
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  avgCookiePerHour: [],
  customerPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.avgCookiePerHour.push(Math.ceil(cookiesPerCustomerPerHour * this.avgCookie));
    }
  },
  render: function() {
    var divEl = document.getElementById('store-container');
    this.customerPerHour();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.name;
    divEl.appendChild(ulEl);
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

pike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
