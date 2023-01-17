import Contribution from 'components/Contribution';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';

function ContributionPage() {
  useTitle('Admin');
  useScrollTop();
  useCloseNavigation()
  return <Contribution />;
}

export default ContributionPage;
