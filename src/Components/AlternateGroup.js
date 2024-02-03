import PropTypes from 'prop-types';
import { useState } from "react";
const AlternateGroup = ({label,placeholder,type,id,disabled=false,isvalid,valid=false,addon=false,left=true}) => {
    const [value,setvalue]=useState();
    return (
        <>
        <div className={`mb-3 ${addon?('input-group'):('form-floating')}`}>
            {addon && left && <span className="input-group-text" id={id}>@</span>}
  <input type={type} className={`form-control ${valid?(isvalid?'is-valid':'is-invalid'):''}`} id={id} placeholder={placeholder} value={value} disabled={disabled} onChange={(event)=> setvalue(event.target.value) }/>
  {addon && !left && <span className="input-group-text" id={id}>@</span>}
  </div>
  </>
    )
}

AlternateGroup.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    isvalid: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    addon:PropTypes.bool.isRequired,
    left:PropTypes.bool.isRequired
};

export default AlternateGroup;