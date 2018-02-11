// mocha_login.js


//  This is a test script that does the following:

//  open a website
//  validate title
//  fills username, password using id
//  Clicks Login button using xpath
//  wait for and validate that login is sucessfull using text verification using xpath
//  Clicks Login button using xpath
//  wait for and validate that logout is sucessfull using text verification using xpath
//  close browser


// To Run:

//  mocha mocha_login.js





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

      .url('http://the-internet.herokuapp.com/login')

      // get title, then pass title to function()

      .getTitle().then( function (title) {

        // verify title

        (title).should.be.equal("The Internet");

        // uncomment for console debug

        // console.log('Current Page Title: ' + title);

      });

  });



  // Test 2: Set the username using id to: tomsmith

  it('should set username to tomsmith', function () {

    return driver.setValue("#username", "tomsmith")

      .getValue("#username").then( function (e) {

        (e).should.be.equal("tomsmith");

        console.log("username: " + e);

      });

  });



  // Test 3: Set the last name using id to: SuperSecretPassword!

  it('should enter password', function () {

    return driver.setValue("#password", "SuperSecretPassword!")

      .getValue("#password").then( function (e) {

        (e).should.be.equal("SuperSecretPassword!");

        console.log("password: " + e);

      });

  });



  // Test 4: Click Login button and wait for text validation after login. Find the elements using xpath.

  it('should click Login', function () {

    return driver.click("//button[@class='radius']").then( function(e) {

      console.log('Click Login Button');

 })

      .waitForVisible("//i[@class='icon-2x icon-signout']", 10000).then(function (e) {

        console.log('Text after Login Validated');

      });

  });


// Test 5: Click Logout button and wait for text validation after Logout. Find the elements using xpath.

  it('should click Logout', function () {

    return driver.click("//i[@class='icon-2x icon-signout']").then( function(e) {

      console.log('Click Logout Button');

 })

      .waitForVisible("//h2[contains(text(),'Login Page')]", 10000).then(function (e) {

        console.log('Text after Logout Validated');

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