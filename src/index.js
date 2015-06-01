'use strict';


module.exports = TestUtils => ({
  toBeEl: () => ({
    compare: component =>
      ({pass: TestUtils.isElement(component)})
  }),


  toBeElOf: () => ({
    compare: (component, componentType) =>
      ({pass: TestUtils.isElementOfType(component, componentType)})
  }),


  toBeDom: () => ({
    compare: component =>
      ({pass: TestUtils.isDOMComponent(component)})
  }),


  toBeComp: () => ({
    compare: component =>
      ({pass: TestUtils.isCompositeComponent(component)})
  }),


  toBeCompOf: () => ({
    compare: (component, componentType) =>
      ({pass: TestUtils.isCompositeComponentWithType(component, componentType)})
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
});
