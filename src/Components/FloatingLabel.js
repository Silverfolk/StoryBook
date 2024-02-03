import PropTypes from "prop-types";
import { useState } from "react";

const FloatingLabel = ({label,placeholder,type,id,disabled=false,isvalid,valid=false}) => {
  const [value,setvalue]=useState();
    return (
        <>
        <div className={"form-floating mb-3"}>
  <input type={type} className={`form-control ${valid?(isvalid?'is-valid':'is-invalid'):''}`} id={id} placeholder={placeholder} value={value} disabled={disabled} onChange={(event)=> setvalue(event.target.value) }/>
  </div>
</>
    )
}

FloatingLabel.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  isvalid: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FloatingLabel;