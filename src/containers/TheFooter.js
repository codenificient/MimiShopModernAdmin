import { CFooter } from '@coreui/react';
import React from 'react';

const TheFooter = () => {
	const currentYear = new Date().getFullYear();
	return (
		<CFooter fixed={false}>
			<div>
				<a href="https://tioye.dev" target="_blank" rel="noopener noreferrer">
					CodenificenT
				</a>
				<span className="ml-1">&copy; 2019 - {currentYear} * All Rights Reserved</span>
			</div>
			<div className="mfs-auto">
				<span className="mr-1">Vos données</span>
				<a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
					Politique de Confidentialité
				</a>
			</div>
		</CFooter>
	);
};

export default React.memo(TheFooter);
