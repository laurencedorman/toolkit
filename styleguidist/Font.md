---
### Install Open Sans
Our main font is Open Sans, to install this font in your project, import the required sass file provided by the toolkit:

```css
@import '~@manomano/toolkit/src/styles/OpenSans'
```

**Please don't install the font from other sources** so we make use of cache cross Manomano applications.

### Font uses

```js
<div className="toolkit">
  <div className="separator-block">
    <h2 className="h3 block-title">Headings</h2>

    <span className="text-light">Title h1 - font-size 28</span>
    <h1>Lorem Ipsum</h1>

    <span className="text-light">Title h2 - font-size 24</span>
    <h2>Lorem Ipsum</h2>

    <span className="text-light">Title h3 - font-size 20</span>
    <h3>Lorem Ipsum</h3>

    <span className="text-light">Title h4 - font-size 16</span>
    <h4>Lorem Ipsum</h4>
  </div>

  <div className="separator-block">
    <h2 className="h3 block-title">Text</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum ipsum sit amet odio interdum, eget elementum nibh euismod. Phasellus facilisis augue non ipsum semper semper. Morbi mollis tellus a elit faucibus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu aliquet dui, vitae fermentum sapien. Praesent feugiat luctus mollis.</p>
    <p>Morbi vestibulum turpis eget arcu imperdiet, sit amet mattis est vulputate. In hac habitasse platea dictumst. Proin dictum erat nisi, et gravida magna bibendum ut. Suspendisse libero nisl, tincidunt vel massa vel, mattis faucibus nibh. Maecenas posuere, tellus varius tempus pulvinar, nibh tellus rhoncus mi, a scelerisque ligula dui eu neque.</p>
  </div>

  <div className="separator-block">
    <h2 className="h3 block-title">Text white</h2>
    <div className="blue-container">
      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum ipsum sit amet odio interdum, eget elementum nibh euismod. Phasellus facilisis augue non ipsum semper semper. Morbi mollis tellus a elit faucibus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu aliquet dui, vitae fermentum sapien. Praesent feugiat luctus mollis.</p>
    </div>
  </div>

  <div className="separator-block">
    <h2 className="h3 block-title">Text strong</h2>
    <strong>Lorem ipsum dolor sit amet.</strong>
  </div>

  <div className="separator-block">
    <h2 className="h3 block-title">Text small</h2>
    <small>Lorem ipsum dolor sit amet.</small>
  </div>

  <div className="separator-block">
    <h2 className="h3 block-title">Lists</h2>
    <ul>
      <li >List item 1</li>
      <li >List item 2</li>
      <li >List item 3</li>
    </ul>
  </div>
</div>
```

### Note on headings usage
---

If you semantically need a <b>h2</b> but with the look of an <b>h3</b> you can do:

```jsx static
<h2 className="h3">
```
