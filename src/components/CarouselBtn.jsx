import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

/**
 * Round carousel arrow button.
 * @param {Object} props
 * @param {'next' | 'previous'} props.type - Which arrow to show
 * @param {string} [props.bgColor] - Background color of the button
 * @param {() => void} [props.onClick] - Runs when the button is clicked
 * @param {string} [props.id] - ID of the button element
 * @param {string} [props.className] - Extra classes to add
 */
const CarouselBtn = ({ type, onClick, id, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      id={id}
      aria-label={type === "next" ? "Next slide" : "Previous slide"}
      className={`flex size-16 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.4)] text-white ${className}`}
    >
      {type === "next" ? <FaLongArrowAltRight /> : <FaLongArrowAltLeft />}
    </button>
  );
};

export default CarouselBtn;
