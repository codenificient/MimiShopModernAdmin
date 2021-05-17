import CIcon from '@coreui/icons-react';
import React from 'react';

function IconList(props) {
	return (
		<div className="c-message darkenBg m-2 white" {...props}>
				{props.iconList &&
					props.iconList.map((name, index) => (
						<span key={index} className="p-3">{<CIcon size={'l'} name={name} />}</span>
					))}
		</div>
	);
}

export default IconList;
