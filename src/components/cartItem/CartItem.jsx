export const CartItem = ({ item: { id, quantity } }) => {
  return (
    <li>
      {id}
      {quantity}
    </li>
  );
};
