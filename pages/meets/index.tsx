import React from 'react';

import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/loading';

const MeetsContainer = dynamic(() => import('../../components/meets'), {
  loading: () => <LoadingSpinner />
});

const Meets = () => {
  return <MeetsContainer />;
};

export default Meets;
