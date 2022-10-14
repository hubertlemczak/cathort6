## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)

## My process

### Built with

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/) for styles
- [Firebase](https://firebase.google.com/) for authentication, storing collections and use of Cloud Firestore
- [Stripe API](https://stripe.com/docs) for secure payment integration

### What I learnt

Styled Components uses a technique called CSS-in-JS, so you simply write your normal CSS code inside of template literals in a js file. I use the `.styled.js` extension to easily distinguish my styles. An interesting feature I experimented with in this project was passing props to the styled component, which can then be accessed in your `.styled.js` file

```js
<StyledShoppingCartTab isActive={isWishListOpen}>

// .styled.js
${({ isActive }) =>
    isActive && `// isActive styling here...`
}
```
