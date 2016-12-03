# Enable Buttons

Automatically enable/disable buttons based on required form inputs

- Plain old vanilla JS
- Just 0.7kb gzipped

## Installation

```
npm install enable-buttons
```

## Usage

```html
<form class="js-enable-buttons">
  <input type="text" name="hello" required>

  <button type="submit" disabled>
    Submit
  </button>
</form>
```

```js
import enableButtons from 'enable-buttons'
enableButtons()
```

## Options

The `enableButtons` function can take an object, that
may include the following properties.

### className

The class name that Enable Buttons uses to locate sections.
Defaults to `js-enable-buttons`.

```js
enableButtons({ className: 'my-special-class' })
```

## Data attributes

### ignore

If there is a button that you don't want Enable Buttons to
do it's magic on, then you can add the `data-ignore`
attribute to it.

```html
<form class="js-enable-buttons">
  <input type="text" name="hello" required>

  <button type="submit" disabled>
    Submit
  </button>

  <button type="button" data-ignore="true">
    Don't touch me
  </button>
</form>
```

## Browser support

Enable Buttons is packaged with Babel, and
[makes use of `Array.from`](https://babeljs.io/docs/usage/caveats).
If you want Enable Buttons to work on browsers that don't support
this method (e.g. IE11), then you will need to
[polyfill `Array.from`](https://github.com/zloirock/core-js)
before calling `enableButtons`.
