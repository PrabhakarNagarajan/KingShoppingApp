import DirectoryItem from "../directory-item/directory-item";
import "./directory.style.scss";

const Directory = ({ productCategory }) => {
  return (
    <div className="directory-main-container">
      {productCategory.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
