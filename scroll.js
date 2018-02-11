//This script scrolls 3 times with 2 seconds wait time in between

var assert = require('assert');

describe('the internet page', function() {
    it('should have the right title', function() {
    browser.url('/infinite_scroll');
   var title = browser.getTitle();
   assert.equal(title, 'The Internet');
    browser.scroll(0,250)
    browser.pause(2000);
  	browser.scroll(0,550)
    browser.pause(2000);
    browser.scroll(0,1000)
    browser.pause(2000);
    });
});

