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
     *
     * @param {String} text Any string that is valid regular expression
     * @returns {Object} Matcher
     */
    toHaveText: function toHaveText(text) {
      return {
        compare: function compare(actual) {
          return { pass: actual.getDOMNode().textContent.match(new RegExp(text)) };
        }
      };
    }

  });
});