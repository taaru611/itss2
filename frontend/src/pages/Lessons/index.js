import Grid from '@material-ui/core/Grid';
import FeatureBox from 'components/FeatureBox';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';
import QuizIcon from '@mui/icons-material/Quiz';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import useCloseNavigation from 'hooks/useCloseNavigation';
import Navigation from 'components/Navigation';

const { LESSONS } = ROUTES;

const GAME_LIST = [
  {
    title: 'Trình độ N1',
    subTitle:
      'Ôn tập ngữ pháp theo trình độ N1.',
    imgUrl: <GTranslateIcon className='card-spec2-icon n1' sx={{ color: "#2c3e5000" }}/>,
    to: LESSONS.LESSON_N1,
  },
  {
    title: 'Trình độ N2',
    subTitle:
      'Ôn tập ngữ pháp theo trình độ N2.',
    imgUrl: <GTranslateIcon className='card-spec2-icon n2' sx={{ color: "#2c3e5000" }}/>,

    to: LESSONS.LESSON_N2,
  },
  {
    title: 'Trình độ N3',
    subTitle:
      'Ôn tập ngữ pháp theo trình độ N3.',
    imgUrl: <GTranslateIcon className='card-spec2-icon n3' sx={{ color: "#2c3e5000" }}/>,

    to: LESSONS.LESSON_N3,
  },
  {
    title: 'Trình độ N4',
    subTitle:
      'Ôn tập ngữ pháp theo trình độ N4.',
    imgUrl: <GTranslateIcon className='card-spec2-icon n4' sx={{ color: "#2c3e5000" }}/>,

    to: LESSONS.LESSON_N4,
  },
  {
    title: 'Trình độ N5',
    subTitle:
      'Ôn tập ngữ pháp theo trình độ N5.',
    imgUrl: <GTranslateIcon className='card-spec2-icon n5' sx={{ color: "#2c3e5000" }}/>,
    to: LESSONS.LESSON_N5,
  },
];
function PlayGamesPage() {
  useCloseNavigation();

  useTitle('Game');
  useScrollTop();

  return (
    <div className="container my-10">
      <>
      <Navigation />
      <Grid container spacing={3}>
        {GAME_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
      </>
    </div>
  );
}

export default PlayGamesPage;
