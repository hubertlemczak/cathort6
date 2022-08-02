export const removeState = {
  remove: { right: 35, msg: 'ITEM REMOVED' },
  addToWishList: { right: 28, msg: 'ITEM ADDED TO WISHLIST' },
  addToCart: { right: 32, msg: 'ITEM ADDED TO CART' },
};

export const theme = {
  color: {
    primary: '#ff7f7f',
    primaryHover: '#ee6666',
    google: '#80adf5',
    googleHover: '#699ae9',
    gray: '#808080',
    black: '#000000',
  },
};

export const BUTTON_TYPE_CLASSES = {
  base: {
    normal: {
      ' background-color': theme.color.primary,
      color: 'white',
      border: 'none',
    },
    hover: {
      ' background-color': theme.color.primaryHover,
      color: 'white',
      border: 'none',
    },
  },
  google: {
    normal: {
      ' background-color': theme.color.google,
      color: 'white',
      border: 'none',
    },
    hover: {
      ' background-color': theme.color.googleHover,
      color: 'white',
      border: 'none',
    },
  },
  inverted: {
    normal: {
      ' background-color': 'white',
      color: 'black',
      border: '1px solid black',
    },
    hover: {
      ' background-color': 'black',
      color: 'white',
      border: 'none',
    },
  },
  black: {
    normal: {
      ' background-color': 'black',
      color: 'white',
      border: '1px solid white',
    },
    hover: {
      ' background-color': 'white',
      color: 'black',
      border: '1px solid black',
    },
  },
};
