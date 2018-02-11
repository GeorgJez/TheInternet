//dcheckboxes_random.js
//the script loads the checkbox test page
//checks the page title

// Click checkbox 1 and 2 10 times out of an array randomly

//to run do npm test

var assert = require('assert');

describe('The Internet page', function (){
    it('should have the right title', function (){
        browser.url('/checkboxes');
        var title = browser.getTitle();
      assert.equal(title, "The Internet");
  });
   
for(var i = 0 ; i < 10 ;i++){
it('should click checkbox item 1', function () {

var check1 = "//html//input[1]";
var check2 = "//html//input[2]";

var myArray = [
  check1,
  check2
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
browser.click(randomItem);

      });
}
  


});




