'use strict';

module.exports = function (TestUtils) {
  return {
    toBeEl: function toBeEl() {
      return {
        compare: function compare(component) {
          return { pass: TestUtils.isElement(component) };
        }
      };
    },

    toBeElOf: function toBeElOf() {
      return {
        compare: function compare(component, componentType) {
          return { pass: TestUtils.isElementOfType(component, componentType) };
        }
      };
    },

    toBeDom: function toBeDom() {
      return {
        compare: function compare(component) {
          return { pass: TestUtils.isDOMComponent(component) };
        }
      };
    },

    toBeComp: function toBeComp() {
      return {
        compare: function compare(component) {
          return { pass: TestUtils.isCompositeComponent(component) };
        }
      };
    },

    toBeCompOf: function toBeCompOf() {
      return {
        compare: function compare(component, componentType) {
          return { pass: TestUtils.isCompositeComponentWithType(component, componentType) };
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
  };
};
//# sourceMappingURL=index.js.map