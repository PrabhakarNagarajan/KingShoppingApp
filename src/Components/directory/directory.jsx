import CategoryItem from "../categoryItem/categoryItem";
import "./directory.style.scss";

const Directory = ({ productCategory }) => {
  return (
    <div className="directory-main-container">
      {productCategory.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
