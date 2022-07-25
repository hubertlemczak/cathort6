import { ReactComponent as TrashSVG } from '../../assets/trash.svg';
import { ReactComponent as HeartSVG } from '../../assets/heart.svg';
import { useShop } from '../../context/ShopContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

import './CartItem.scss';

export const CartItem = ({ item: { id, quantity } }) => {
  const { shopItems } = useShop();
  const { removeItemFromCart } = useShoppingCart();
  const { name, imageUrl, price } = shopItems.find((i) => i.id === id);
  return (
    <li className="shopping-cart-item">
      <div className="item-img-container">
        <img className="item-img" src={imageUrl} alt={name} />
      </div>
      <div className="item-right">
        <div className="item-details">
          <p className="item-price">£{price.toFixed(2)}</p>
          <p className="item-name">{name}</p>
          <div className="item-details-more">
            <p className="item-type">BLUE</p>
            <p className="item-size">XL</p>
            <p className="item-quantity">Qty: {quantity}</p>
          </div>
        </div>
        <div className="item-buttons">
          <HeartSVG className="item-love" />
          <TrashSVG
            className="item-delete"
            onClick={() => removeItemFromCart(id)}
          />
        </div>
      </div>
    </li>
  );
};
