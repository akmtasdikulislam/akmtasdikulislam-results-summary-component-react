# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Project Start Date: 17 February 2024
Project Duration: 01 hour 43 minutes

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content. [Normal Version](https://github.com/akmtasdikulislam/results-summary-component)

### Screenshot

| Desktop Version                       | Mobile Version                       |
| ------------------------------------- | ------------------------------------ |
| ![](/screenshots/desktop-design.jpeg) | ![](/screenshots/mobile-design.jpeg) |

### Links

- [Solution URL](https://github.com/akmtasdikulislam/results-summary-component-react)
- [Live Site URL](https://results-summary-component-react.onrender.com/)

## My process

- At first, I linked the `style.css` file and the Google Fonts CDN with the `index.html` file.
- Then, imported the colour variables into the _css_ file from `style-guide.md` file and set the instructed base _font-size_ for this project. Also, I initialized the css file.
- After initialization, I wrote necessary `html` code to structure the _desktop-version of the UI Design Sample_ and also wrote necessary _css_ code to match the design as close as possible.
- After completing the _desktop-version UI development_, I wrote necessary _CSS Media Queries_ to develop the _mobile-version UI design_.

**To show result summary topics dynamically**

- At first, I imported the `data.json` in `App.js`.
- Then passed each result summary information to `<SummaryTopic>` _jsx_ component by running a map method on the imported `data` array.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React JS

### What I learned

By doing this project, I learned about css `linear-gradient()` and `box-shadow`.

**Linear Gradient**

```css
background-image: linear-gradient(
  to bottom,
  var(--light-slate-blue) 0%,
  var(--light-royal-blue) 100%
);
```

**CSS box-shadow**

```css
box-shadow: 0 10px 50px -12px hsla(241, 100%, 89%, 0.6);
```

**How to use JSON in JSX**

```js
import data from "./assets/data.json";
data.map((datum) => <SummaryTopic key={data.indexOf(datum)} data={datum} />);
// Here index of each array item is passed as key.
```

### Useful resources

- [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) - This helped me to learn about css `linear-gradient` property.
- [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - This helped me to learn about css `box-shadow` property.
- [How to Read a JSON File in JavaScript – Reading JSON in JS](https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/) - This helped me to learn how to use JSON in ReactJS.
- [Correct path for img on React.js](https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js#:~:text=You%27re%20using%20a%20relative%20url,src%3D%22/details/img/myImage.png%22%20/%3E)- This helped me to learn how to import Image using path in ReactJS.
- [Find the Array Index with a Value in JavaScript](https://www.geeksforgeeks.org/how-to-find-the-array-index-with-a-value-in-javascript/) - This helped to learn in how many ways I can get index of an array item.
- [JavaScript split() a String – String to Array JS Method](https://www.freecodecamp.org/news/javascript-split-a-string-string-to-array-js-method/)- This helped me to learn how to slit a string in JS.
- [Javascript String Methods: A Cheat Sheet for Developer](https://dev.to/devsmitra/javascript-string-methods-a-cheat-sheet-for-developer-4kbk) - This helped me to learn about the string methods in JS.

- [PerfectPixel](https://www.welldonecode.com/perfectpixel/) - This helped me to compare with the design image and match the exact dimensions

## Author

- Frontend Mentor - [@akmtasdikulislam](https://www.frontendmentor.io/profile/akmtasdikulislam)
- Twitter - [@Akm_Tasdikul](https://www.twitter.com/Akm_Tasdikul)

## Acknowledgments

I very much thankful to [Alok Suman](https://www.frontendmentor.io/profile/Alokray007) for suggesting me about _PixelPerfect_ extesnion. By following his suggestion, I can now match my design much closer to the sample design image.

[Alok Suman's suggestion](https://www.frontendmentor.io/solutions/resultssummarycomponent-Z1L-G8H-u4#:~:text=Hello%20there%20%F0%9F%91%8B,Happy%20coding.)
