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
    var ulEl = document.getElementById('store-container');
    this.customerPerHour();
    ulEl.textContent = this.name;
    for(var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiePerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

pike.render();
