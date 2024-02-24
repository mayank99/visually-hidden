# visually-hidden

Custom element for [inclusively hiding content](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) while keeping it accessible to assisitive technology.

Install [`@acab/visually-hidden`](https://npmjs.com/@acab/visually-hidden) (or use [import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)).

```
npm add @acab/visually-hidden
```

## Usage

```html
<visually-hidden>content goes here</visually-hidden>
```

By default, the `<visually-hidden>` element acts just like a `<span>`. There are two ways to give this element visually-hidden styles.

- **Using CSS** (recommended):
	```css
  @import "@acab/visually-hidden/styles.css" layer(visually-hidden);
	```
- **Using JS**:
	```js
	import "@acab/visually-hidden";
	```

The CSS way is more robust, more versatile, and it also gives you the ability to use `class="visually-hidden"` as an equivalent alternative to `<visually-hidden>`.

```html
<visually-hidden>…</visually-hidden>
<span class="visually-hidden">…</span>
```

The JS way is fully encapsulated and can be used inside other shadow roots, but (obviously) it relies on client-side JavaScript.

If necessary, both ways can be combined, at the expense of a small amount of duplication in the client bundle.
