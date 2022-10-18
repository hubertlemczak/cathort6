import Button from '../../../components/Button';
import { PaymentElement } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  return (
    <form>
      <PaymentElement />
      <Button buttonType="base" style={{ marginTop: '30px' }}>
        <span>Pay now</span>
      </Button>
    </form>
  );
};

export default PaymentForm;
