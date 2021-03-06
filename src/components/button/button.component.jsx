import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  black: 'black',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      <span style={{ fontWeight: 400, fontFamily: 'Barlow Condensed' }}>
        {children}
      </span>
    </button>
  );
};

export default Button;
