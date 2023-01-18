import GrammarData from 'components/Grammar/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function GrammarPage() {
  useCloseNavigation();
  useTitle('Ngữ pháp, cấu trúc câu');

  return <GrammarData level={'N5'}/>;
}

export default GrammarPage;
