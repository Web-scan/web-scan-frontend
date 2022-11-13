/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types";
import { GREY_50, GREY_100, GREY_150 } from "../constants/color";

export default function Button({
  text,
  handleClick,
  width,
  height,
  borderRadius,
  marginRight,
  backgroundColor,
}) {
  return (
    <button
      onClick={handleClick}
      css={{
        width,
        height,
        borderRadius,
        marginRight,
        fontSize: "12px",
        backgroundColor,
        "&:hover": {
          backgroundColor: GREY_100,
        },
        "&:active": {
          backgroundColor: GREY_150,
        },
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  marginRight: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  width: "80px",
  height: "30px",
  borderRadius: "10px",
  backgroundColor: GREY_50,
};
