import React from 'react';
import './style.css';

/**
 * @author
 * @function Card
 **/

const CardOne = (props) => {
	return (
		<div className="cardOne" {...props}>
			{(props.headerLeft || props.headerRight) && (
				<div className="cardHeader">
					{props.headerLeft && (
						<div
							style={{
								alignSelf: 'center',
								fontSize: '20px',
								fontWeight: '600'
							}}
						>
							{props.headerLeft}
						</div>
					)}
					{props.headerRight && props.headerRight}
				</div>
			)}

			{props.children}
		</div>
	);
};

export default CardOne;
