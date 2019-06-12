# CooOOOoOkies
A salmon cookie shop online store front.

## Introduction
This application implements the use of JavaScript objects in order to build a sales page for a cookie shop.

## Daily Summaries
Day 2 - Code from the previous day was simplified with the use of a constructor
```javascript
var Store = function(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  allStores.push(this);
  this.cookiePerHourPerStoreArray = [];
  this.cookiesPerHourPerStore();
  this.cookiesPerStore();
  this.cookiesAtEachHour = [];
};
```
Then stores were instantiated like so:
```javascript
var pike = new Store('1st and Pike', 23, 65, 6.3);
```

Day 1 - Use object literal notation to represent information for each store.  The random number generator was taken from [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

The object literals used looked something like this:
```javascript
var nameOfStore = {
  name: 'name of store',
  minCustomer: a number,
  maxCustomer: a number,
  avgCookie: a number,
  avgCookiePerHour: an empty array,
  customerPerHour: function() {
    - logic to figure out the number of customers per hour times the number of average cookie per customer
    - add this number to avgCookiePerHour
    }
  },
  render: function() {
    -logic to append information to the DOM
    }
  }
}
```

## Acknowledgements
Color scheme from [here](https://coolors.co/c9cba3-ffe1a8-e26d5c-723d46-472d30).
Stock photo of the hands holding the cookie is from [here](https://www.pexels.com/search/cookies/).
