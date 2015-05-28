# react-jasmine-matchers
Custom matchers for React

Uses ReactTestUtils: https://facebook.github.io/react/docs/test-utils.html

# Configuration

**WARNING** expects `React.addons` and `jasmine` to be globally available

## Karma config

```javascript
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/react-jasmine-matchers/lib/index.js',
      'spec/index.js'
    ],
    webpack: require('./webpack.config').karma,
    preprocessors: {
      'node_modules/react-jasmine-matchers/lib/index.js': ['webpack'],
      'spec/**/*.js': ['webpack'],
      'src/**/*.js': ['coverage']
    },
    reporters: ['progress']
  });

  // ...
};
```

## Webpack config

```javascript

const karma = assign({}, config, {

  // ...

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react/addons',
    })
  ],

  // ...

});

module.exports.karma = karma;
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

### `toHaveText(text)`

Checks if if element's DOM node has text with `.match(new RegExp(text)`

# Example

```javascript
'use strict';

const Button = require('./Button');

describe('Button', () => {
  it('Should render <button> tag with specified content', () => {
    // Render a button with content into the document
    const button = TestUtils.renderIntoDocument(
      <Button onClick={() => null} styleDefaults={{}}>Test</Button>
    );

    const b = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(b).toBeDom();
    expect(b).toHaveText('Test');
  });

  it('Should call onClick callback when clicked', () => {
    const onClick = jasmine.createSpy('onClick');
    const button = TestUtils.renderIntoDocument(
      <Button onClick={onClick} styleDefaults={{}}>Test</Button>
    );

    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(button, 'button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

