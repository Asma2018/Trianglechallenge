var wd = require('wd'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    uuid = require('uuid-js');

var VARS = {};

// This assumes that selenium is running at http://127.0.0.1:4444/wd/hub/
var noop = function() {},
    b = wd.remote();

describe('Selenium Test Case', function() {

  this.timeout(60000);

  it('should execute test case without errors', function(done) {

    b.chain(function(err) {
      done(err);
    })
    .init({
      browserName: 'firefox'
    })
    .get("file:///C:/Users/Helloworld/Desktop/Triangle-Type-challenge/index.html//")
    .elementById("txt1", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementById("txt1", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "4", noop);
      });
    })
    .elementByCssSelector("fieldset", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementById("txt2", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "4", noop);
      });
    })
    .elementByCssSelector("fieldset", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementById("txt3", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "4", noop);
      });
    })
    .elementById("submit", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .close(function(err) {
      done(err);
    });

  });
});

afterEach(function() {
  b.quit();
});
