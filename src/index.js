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
   */
  toHaveText: () => ({
    compare: (element, text) => {
      const regexp = text instanceof RegExp ? text : new RegExp(text, 'ig');
      const pass = element.getDOMNode().textContent.match(regexp);
      const message = pass ?
        `Text "${text}" is found within an element` :
        `Text "${text}" is not found within an element`;
      return {pass, message};
    }
  })


}));
