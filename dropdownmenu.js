//dropdownmenu.js
//the script loads the dropdown test page
//checks the page title
//clicks the dropdown menu
// selects option 1
//select option 2
//checks if option 2 is selected
//switches between Option 1 and Option 2 10 times



var assert = require('assert');

describe('The Internet page', function (){
    it('should have the right title', function (){
        browser.url('/dropdown');
        var title = browser.getTitle();
      assert.equal(title, "The Internet");
  });
   

it('should click dropdown item 1', function () {

    browser.click("//option[@value='1']");
    //console.log('Click drop down item 1');

      });

it('should click dropdown item 2', function () {

    browser.click("//option[@value='2']");
    //console.log('Click drop down item 2');

      });


it('should detect if an element is selected', function () {
    var element2 = $("[value='2']");
    console.log(element2.isSelected()); // outputs: true
   assert(element2.isSelected()); // outputs: true

  
for(var i = 0 ; i < 10 ;i++){

    if (element2.isSelected()){
    browser.click("//option[@value='1']");
    } else {
    browser.click("//option[@value='2']");
    }

};

});


});


