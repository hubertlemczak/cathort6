import {
  StyledCategoryBGImage,
  StyledCategoryBodyContainer,
  StyledCategoryItemContainer,
} from './styles/CategoryItem.styled';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <StyledCategoryItemContainer to={title}>
      <StyledCategoryBGImage bg={imageUrl} />
      <StyledCategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </StyledCategoryBodyContainer>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
