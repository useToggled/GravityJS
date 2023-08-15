
# GravityJS

GravityJS is an interactive JavaScript library that makes transition effects simple.


## Features

- Transition Effects
- Interpolation
- Hover Effects
- Width and Height Animations
- Click Effects


## Demo

https://js.cosmixcom.repl.co/test/test.html

## Installation

Install GravityJS from the CDN.

```html
  <script src="https://toggled.tech/cdn/gravity/1.0/gravity.js"></script>
```
    
## FAQ

#### Does GravityJS work with NodeJS?

A NPM package has not been developed yet.

#### Where do I report a bug?

At: https://github.com/useToggled/gravityjs/issues


## Feedback

If you have any feedback, please reach out to us at info@zymono.com


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

Create an issue on this GitHub page.


## Tech Stack

**Client:** Static JS

**Server:** None


## Authors

- [@cosmixcom](https://www.github.com/cosmixcom)


![Logo](https://i.imgur.com/sI3NhpM.png)


## Usage/Examples

```html
<button class="btn" id="hover">Hover Effect</button>

<script src="https://toggled.tech/cdn/gravity/1.0/gravity.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
      // Adding hover effect
    Gravity.addHoverEffect({
    elements: '#hover',
    defaultHoverShade: 20,
    easing: 'ease-in-out',
    duration: 300,
    hoverColor: '#2ecc71'
  });
</script>
```

