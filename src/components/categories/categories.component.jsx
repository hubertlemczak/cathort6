import './categories.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import { useShop } from '../../context/ShopContext';

const Categories = () => {
  const { shopCategories } = useShop();
  return (
    <div className="categories-container">
      {shopCategories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
