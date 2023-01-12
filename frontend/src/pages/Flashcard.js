import FlashcardData from 'components/Flashcard/data';
import useTitle from 'hooks/useTitle';
import React from 'react';
import useCloseNavigation from 'hooks/useCloseNavigation';

function FlashcardPage() {
  useTitle('Flashcard');
  useCloseNavigation();
  return <FlashcardData />;
}

export default FlashcardPage;
