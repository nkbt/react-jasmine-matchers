# react-jasmine-matchers
Custom matchers for React

Requires ReactTestUtils: https://facebook.github.io/react/docs/test-utils.html

# Configuration

```javascript
var TestUtils = require('react/lib/ReactTestUtils');
var matchers = require('react-jasmine-matchers');
beforeEach(function () {
  jasmine.addMatchers(matchers(TestUtils));
});
```

# Matchers

### `toBeEl()`

Checks if object is element. See `TestUtils.isElement()`

### `toBeElOf(Type)`

Checks if object is element of Type. See `TestUtils.isElementOfType()`

### `toBeDom()`

Checks if object is DOM Component. See `TestUtils.isDOMComponent()`

### `toBeComp()`

Checks if object is Composite Component. See `TestUtils.isCompositeComponent()`

### `toBeCompOf(Type)`

Checks if object is Composite Component of Type. See `TestUtils.isCompositeComponentWithType()`

### `toHaveText(String|RegExp)`

Checks if element's DOM node has text

# Example

```javascript
'use strict';

const Button = require('./Button');

describe('Button', () => {
  it('Should render <button> tag with specified content', () => {
    // Render a button with content into the document
    const button = TestUtils.renderIntoDocument(
      <Button onClick={() => null}>Test</Button>
    );

    const b = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(b).toBeDom();
    expect(b).toHaveText('Test');
    expect(b).not.toHaveText('Oops');
  });

  it('Should call onClick callback when clicked', () => {
    const onClick = jasmine.createSpy('onClick');
    const button = TestUtils.renderIntoDocument(
      <Button onClick={onClick}>Test</Button>
    );

    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(button, 'button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

