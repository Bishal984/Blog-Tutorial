import React from 'react';

function InputGroup({ type, placeholder, id }) {
	return (
		<div>
			<label htmlFor={id}></label>
			<input type={type} placeholder={placeholder} id={id}></input>
		</div>
	);
}
export default InputGroup;
