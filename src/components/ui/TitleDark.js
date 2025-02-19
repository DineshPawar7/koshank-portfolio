import "../ui/TitleDark.css";

const TitleDark = ({ category, title, description, descriptionStyles }) => {
    return (
      <div className="title-dark-container">
        {category && <p className="category">{category}</p>}
        <h2 className="title">{title}</h2>
        {description && (
          <p className={`description ${descriptionStyles || ''}`}>{description}</p>
        )}
      </div>
    );
  };
  
  export default TitleDark;
  