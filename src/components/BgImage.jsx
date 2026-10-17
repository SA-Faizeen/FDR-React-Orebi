/**
 * A div with a background image.
 * @param {Object} props
 * @param {string} props.src - Image URL (use an imported image)
 * @param {string} [props.className] - Extra classes to add
 * @param {React.ReactNode} [props.children] - Content placed over the image
 */
const BgImage = ({ src, className = "", children }) => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  );
};

export default BgImage;