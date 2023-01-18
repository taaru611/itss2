import Navigation from 'components/Navigation';
import React, { useState } from 'react';
import SentenceContributionData from './Sentence/data';
import useStyle from './style';
import WordContributionData from './Word/data';

function Contribution() {
  const classes = useStyle();
  const [mode, setMode] = useState(0);

  return (
    <div className="container">
      <Navigation />
      <div className={classes.root}>
        <ul className={classes.tabs}>
          <li
            className={`${classes.tab} ${mode === 0 ? 'active' : ''}`}
            onClick={() => setMode(0)}>
            Thêm từ
          </li>
          <li
            className={`${classes.tab} ${mode === 1 ? 'active' : ''}`}
            onClick={() => setMode(1)}>
            Thêm ngữ pháp
          </li>
        </ul>

        <div className={classes.tabContent}>
          {mode === 0 ? (
            <div className="ani-fade">
              <WordContributionData />
            </div>
          ) : (
            <div className="ani-zoom">
              <SentenceContributionData />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contribution;
