/* global jasmine, beforeEach */

'use strict';

var TestUtils = React.addons.TestUtils;

beforeEach(function () {
  return jasmine.addMatchers({

    toBeEl: function toBeEl() {
      return { compare: function compare(actual) {
          return { pass: TestUtils.isElement(actual) };
        } };
    },

    toBeElOf: function toBeElOf(compClass) {
      return {
        compare: function compare(actual) {
          return { pass: TestUtils.isElementOfType(actual, compClass) };
        }
      };
    },

    toBeDom: function toBeDom() {
      return { compare: function compare(actual) {
          return { pass: TestUtils.isDOMComponent(actual) };
        } };
    },

    toBeComp: function toBeComp() {
      return { compare: function compare(actual) {
          return { pass: TestUtils.isCompositeComponent(actual) };
        } };
    },

    toBeCompOf: function toBeCompOf(compClass) {
      return {
        compare: function compare(actual) {
          return { pass: TestUtils.isCompositeComponentWithType(actual, compClass) };
        }
      };
    },

    /**
     * Validate if element's DOM node has text
     */
    toHaveText: function toHaveText() {
      return {
        compare: function compare(element, text) {
          var regexp = text instanceof RegExp ? text : new RegExp(text, 'ig');
          var pass = element.getDOMNode().textContent.match(regexp);
          var message = pass ? 'Text "' + text + '" is found within an element' : 'Text "' + text + '" is not found within an element';
          return { pass: pass, message: message };
        }
      };
    }

  });
});
//# sourceMappingURL=index.js.map