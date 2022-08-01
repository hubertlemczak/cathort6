import { BUTTON_TYPE_CLASSES } from '../utils/vars';
import { StyledButton } from './styles/Button.styled';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <StyledButton buttonType={BUTTON_TYPE_CLASSES[buttonType]} {...otherProps}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
