import { StyledCheckoutContainer } from './index.styled';

import OrderSummary from './components/OrderSummary';
import PaymentForm from './components/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const stripePromise = loadStripe(
  'pk_test_51LsRzHClAUTDSWOO6pPq6LiIeWwPpxipndffSBvPSrUzvOhEkbfJ1z3xBNwzgs1a2twHpRaWH6J7OSIbRKRj4j9L00G1u3YiQC'
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState();
  console.log(clientSecret);
  useEffect(() => {
    async function initialize() {
      const response = await fetch(
        'http://localhost:4242/create-payment-intent',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: 2 }),
        }
      );
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    }

    initialize();
  }, []);

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
        <PaymentForm stripe={stripePromise} />
      </Elements>
    </StyledCheckoutContainer>
  );
};
export default Checkout;
