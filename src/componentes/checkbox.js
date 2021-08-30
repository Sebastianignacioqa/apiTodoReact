import React from 'react';


const Checkbox = (props) => {
    const {
        onChange,
        data: {
            id, descripcion,done
        }} = props;

return (
<label className="nuevoitem">
<input
  className="state"
  name={id}
  type="checkbox"
  defaultChecked={done}
  onChange={onChange}
/>
<div className="text">{descripcion}</div>
</label>)
};

export default Checkbox