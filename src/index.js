/* global jasmine, beforeEach */

'use strict';


const TestUtils = React.addons.TestUtils;


beforeEach(() => jasmine.addMatchers({


  toBeEl: () => ({compare: actual => ({pass: TestUtils.isElement(actual)})}),


  toBeElOf: compClass => ({
    compare: actual => ({pass: TestUtils.isElementOfType(actual, compClass)})
  }),


  toBeDom: () => ({compare: actual => ({pass: TestUtils.isDOMComponent(actual)})}),


  toBeComp: () => ({compare: actual => ({pass: TestUtils.isCompositeComponent(actual)})}),


  toBeCompOf: compClass => ({
    compare: actual => ({pass: TestUtils.isCompositeComponentWithType(actual, compClass)})
  }),


  /**
   * Validate if element's DOM node has text
   *
   * @param {String} text Any string that is valid regular expression
   * @returns {Object} Matcher
   */
  toHaveText: text => ({
    compare: actual => ({pass: actual.getDOMNode().textContent.match(new RegExp(text))})
  })


}));
