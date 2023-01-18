import Navigation from 'components/Navigation';
import WordMatchGameData from 'components/PlayGames/WordMatch/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function WordMatchGamePage() {
  useTitle('Game ghép từ (Word matching game)');
  useCloseNavigation();

  return (
    <>
      <Navigation />
      <WordMatchGameData />; 
    </>
  )
}

export default WordMatchGamePage;
