import React from 'react';

function Button({ type, children, onClick }) {
	return (
		<div>
			<button type={type} className="btn" onClick={onClick}>
				{children}
			</button>
		</div>
	);
}
export default Button;
