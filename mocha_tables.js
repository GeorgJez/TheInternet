// mocha_tables.js


//  This is a test script that does the following:

//  open a website
//  validate title
//  Checks olumn headers
//  Gets firs item in column value
//  clicks on column header to sort
//  Gets first item value
//  Compares first ite value against before value
//  close browser
// those tests should be done as arrays

// To Run:

//   mocha \\test\testtable.js.js





// required libraries. Using should instead of chai

var webdriverio = require('webdriverio'),

  should = require('should');



// a test script block or suite

//describe('FLogin-out test for web site - The Internet', function() {
describe('Login Test for page - The Internet', function() {

  // set timeout to 10 seconds

	this.timeout(10000);

  var driver = {};



  // hook to run before tests

  before( function () {

    // check for global browser (grunt + grunt-webdriver)

    if(typeof browser === "undefined") {

      // load the driver for browser (in this case Firefox)

      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });

      return driver.init();

    } else {

      // grunt will load the browser driver

      driver = browser;

      return;

    }

  });



  // a test spec - "specification"

  // You can use it.skip to skip a test/suite. Example:  it.skip('should be load correct page and title', function () {
  
  //Test 1: Load test page and verify title.

  it('should be load correct page and title', function () {

    // load page, then call function()

    return driver

      .url('http://the-internet.herokuapp.com/tables')

      // get title, then pass title to function()

      .getTitle().then( function (title) {

        // verify title

        (title).should.be.equal("The Internet");

        // uncomment for console debug

        // console.log('Current Page Title: ' + title);

      });

  });



   // Test 2: Verify column 1 header

  it('Test-2 should have Last Name column', function () {

         driver.getValue("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Last Name')]").then( function (e) {

        (e).should.be.equal("Last Name");

       // console.log("Column 1 Title: " + e);

      });

  });

// Test 3: Verify column 2 header

  it('Test-3 should have First Name column', function () {

         driver.getValue("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'First Name')]").then( function (e) {

        (e).should.be.equal("First Name");

       // console.log("Column 1 Title: " + e);

      });

  });

   // Test 4: verify column 3 header

  it('Test-4 should have Email column', function () {

         driver.getValue("(//html//table[@id='table1']//th[3]").then( function (e) {

        (e).should.be.equal("Email");

      //  console.log("Column 3 Title: " + e);

      });

  });



  // Test 5:  verify column 4 header

  it('Test-5 should have Due column', function () {
   
     driver.getValue("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Due')]").then( function (e) {

        (e).should.be.equal("Due");

       // console.log("Column 4 Title: " + e);
      });

  });


 //Test 6: verify column 5 header

  it('Test-6 should have Web Site column', function () {

    driver.getValue("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Web Site')]").then( function (e) {

        (e).should.be.equal("Web Site");

        //console.log("Column 5 Title:" + e);

      });

  });

 // Test 7: verify column 6 header

  it('Test-7 should have Action column', function () {

        driver.getValue("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Action')]").then( function (e) {
      
      (e).should.be.equal("Action");

      //console.log('Column 6 Title:' + e);

    });

  });

 // Test 8: Verify column 1 value

  it('Test-8 verify Last Name colum change', function () {

         driver.getValue("(//table[@id='table1']//tbody//tr//td[contains(text(),'Smith')]").then( function (e) {
         driver.click("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Last Name')]").then( function (f) {
         driver.getValue("(//table[@id='table1']//tbody//tr//td[contains(text(),'Smith')]").then( function (g) {
       
        (g).should.be.notequal(e);

        //console.log("name: " + g);
        });
      });
    });
  });


// Test 9: Verify column 2 value

  it('Test-9 verify First Name column chang', function () {

         driver.getValue("(//table[@id='table1']//tbody//tr//td[contains(text(),'John')]").then( function (e) {
         driver.click("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'First Name')]").then( function (f) {
         driver.getValue("//table[@id='table1']//tbody//tr//td[contains(text(),'John')]").then( function (g) {
       
        (g).should.be.notequal(e);

        //console.log("name: " + g);
        });
      });
    });
  });



// Test 10: Verify column 3 value

it('Test-10 verify Email column change', function () {

         driver.getValue("//table[@id='table1']//tbody//tr//td[contains(text(),'jsmith@gmail.com')]").then( function (e) {
         driver.click("(//html//table[@id='table1']//th[3]").then( function (f) {
         driver.getValue("//table[@id='table1']//tbody//tr//td[contains(text(),'jsmith@gmail.com')]").then( function (g) {
       
        (g).should.be.notequal(e);

        //console.log("name: " + g);
        });
      });
    });
  });

// Test 11: Verify column 4 value

it('Test-11 verify Due column change', function () {

         driver.getValue("//html//table[@id='table1']//tr[1]/td[4]").then( function (e) {
         driver.click("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Due')]").then( function (f) {
         driver.getValue("//html//table[@id='table1']//tr[1]/td[4]").then( function (g) {
       
        (g).should.be.notequal(e);

        //console.log("name: " + g);
        });
      });
    });
  });


// Test 12: Verify column 5 value

it('Test-12verify WebSite column change', function () {

         driver.getValue("//table[@id='table1']//tbody//tr//td[contains(text(),'http://www.jsmith.com')]").then( function (e) {
         driver.click("(//table[@id='table1']//thead//tr//th[@class='header']//span[contains(text(),'Web Site')]").then( function (f) {
         driver.getValue("//table[@id='table1']//tbody//tr//td[contains(text(),'http://www.jsmith.com')]").then( function (g) {
       
        (g).should.be.notequal(e);

        //console.log("name: " + g);
        });
      });
    });
  });






  // a "hook" to run after all tests in this block. This will clear the driver.

	after(function() {

    if(typeof browser === "undefined") {

      return driver.end();

    } else {

      return;

    }

  });

});