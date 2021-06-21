import { CFooter } from '@coreui/react';
import React from 'react';

const TheFooter = () => {
	const currentYear = new Date().getFullYear();
	return (
    <CFooter fixed={false}>
      <div>
        <a href="https://tioye.dev" target="_blank" rel="noopener noreferrer">
          CodenificienT
        </a>
        <span className="ml-1">
          &copy; 2019 - {currentYear} * Tous Droits Reservés
        </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">MimiShop Ouaga LLC</span>
        <a
          href="https://mimishopouaga.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir la Boutique
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
