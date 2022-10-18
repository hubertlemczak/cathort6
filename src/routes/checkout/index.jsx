import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { StyledCheckoutContainer } from './index.styled';

import OrderSummary from './components/OrderSummary';
import PaymentForm from './components/PaymentForm';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const stripePromise = loadStripe(
  'pk_test_51LsRzHClAUTDSWOO6pPq6LiIeWwPpxipndffSBvPSrUzvOhEkbfJ1z3xBNwzgs1a2twHpRaWH6J7OSIbRKRj4j9L00G1u3YiQC'
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState();

  const { getCartTotal } = useShoppingCart();

  useEffect(() => {
    async function initializePaymentIntent() {
      const amount = getCartTotal();

      const response = await fetch(
        'http://localhost:4040/create-payment-intent',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount }),
        }
      );
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    }

    initializePaymentIntent();
  }, [getCartTotal]);

  if (!clientSecret) return;

  return (
    <StyledCheckoutContainer>
      <OrderSummary />
      <Elements
        stripe={stripePromise}
        options={{
          appearance: {
            theme: 'stripe',
          },
          clientSecret,
        }}
      >
        <PaymentForm />
      </Elements>
    </StyledCheckoutContainer>
  );
};
export default Checkout;
