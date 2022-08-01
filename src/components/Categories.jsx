import CategoryItem from './CategoryItem';
import { useShop } from '../context/ShopContext';

import { StyledCategoriesContainer } from './styles/Categories.styled';

const Categories = () => {
  const { shopCategories } = useShop();
  return (
    <StyledCategoriesContainer>
      {shopCategories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </StyledCategoriesContainer>
  );
};

export default Categories;
