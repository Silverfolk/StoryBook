import PropTypes from "prop-types"

function Button({ label, backgroundColor = "#3A57E8", size = "md",color="white",borderColor = "white", handleClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75;
  if(size === "ex") scale=0.50;
  if (size === "lg") scale = 1.5;

  const hasBorder = borderColor.toLowerCase() !== "white";

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    color,
    border: hasBorder ? `1px solid ${borderColor}` : "none",
    textAlign: "center",
    borderRadius: "3px",
    fontFamily: "Inter, sans-serif"
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.oneOf(["ex","sm", "md", "lg"]),
  handleClick: PropTypes.func,

}

export default Button