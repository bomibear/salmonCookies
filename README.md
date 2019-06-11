# CooOOOoOkies
A salmon cookie shop online store front.

## Introduction
This application implements the use of JavaScript objects in order to build a sales page for a cookie shop.

## Daily Summaries
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

