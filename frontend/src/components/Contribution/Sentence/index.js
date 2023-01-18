import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import TopicSelect from 'components/UI/TopicSelect';
import { MAX, WORD_LEVELS } from 'constant';
import { SENTENCE_TOPICS } from 'constant/sentence-topics';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InformationTooltip from '../Word/InformationTooltip';
import useStyle from '../Word/style';

const schema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Hãy nhập một tiêu đề ngữ pháp vào đây')
    .lowercase()
    .max(MAX.SENTENCE_LEN, `Từ dài tối đa ${MAX.SENTENCE_LEN} ký tự`),
  desc: yup
    .string()
    .trim()
    .lowercase()
    .required('Hãy nhập ý nghĩa của ngữ pháp bằng tiếng Việt')
    .max(MAX.SENTENCE_MEAN_LEN, `Từ dài tối đã ${MAX.SENTENCE_MEAN_LEN} ký tự`),
  html: yup
    .string()
    .max(
      MAX.SENTENCE_NOTE_LEN,
      `Giải thích tối đa ${MAX.SENTENCE_NOTE_LEN} ký tự`,
    ),
  level: yup
    .string()
    .required('Chọn cấp bậc của ngữ pháp')
    .oneOf(WORD_LEVELS.map((i) => i.value)),  
});
const ButtonWrapper = (props) => <Grid {...props} item xs={12} />;

function SentenceContribution({ submitting, onSubmitForm }) {
  const classes = useStyle();
  const [resetFlag, setResetFlag] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onResetForm = () => {
    setResetFlag(Math.random() + 1);
    reset({ title: '', desc: '', html: '', level: '' });
  };

  const handleSubmitForm = (formData) => {
    onSubmitForm({ ...formData});
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Thêm ngữ pháp</h1>
      <div className="dyno-break"></div>

      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
        <Grid className={classes.grid} container spacing={3}>
          {/* new sentence */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Tiêu đề ngữ pháp"
              multiline
              error={Boolean(errors.sentence)}
              inputProps={{
                autoFocus: true,
                className: classes.sentenceInput,
                maxLength: MAX.SENTENCE_LEN,
                name: 'title',

                ...register('title'),
              }}
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.sentence && (
              <p className="text-error">{errors.sentence?.message}</p>
            )}
          </Grid>

          {/* mean sentence */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Nghĩa của ngữ pháp bằng tiếng Viết (*)"
              error={Boolean(errors.mean)}
              multiline
              inputProps={{
                maxLength: MAX.SENTENCE_MEAN_LEN,
                name: 'desc',
                className: classes.sentenceInput,
                ...register('desc'),
              }}
              endAdornment={
                <InformationTooltip title="Nhập những nghĩa của ngữ pháp vừa nhập." />
              }
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.mean && (
              <p className="text-error">{errors.mean?.message}</p>
            )}
          </Grid>

          {/* sentence note */}
          <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Thêm giải thích cho ngữ pháp trên (*)"
              error={Boolean(errors.note)}
              multiline
              inputProps={{
                className: classes.sentenceInput,
                maxLength: MAX.SENTENCE_NOTE_LEN,
                name: 'html',
                ...register('html'),
              }}
              endAdornment={
                <InformationTooltip title="Thêm các ví dụ, cấu trúc câu, cách dùng, lưu ý, ..." />
              }
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.note && (
              <p className="text-error">{errors.note?.message}</p>
            )}
          </Grid>

          {/* topics */}
          {/* <TopicSelect
            buttonWrapper={ButtonWrapper}
            tagsWrapper={ButtonWrapper}
            topicList={SENTENCE_TOPICS}
            onChange={(v) => (topics.current = v)}
            resetFlag={resetFlag}
          /> */}
          <Grid item xs={12} md={12} lg={12}>
              <SelectCustom
                className="w-100"
                label="Cấp bậc của ngữ pháp (*)"
                options={WORD_LEVELS}
                error={Boolean(errors.level)}
                resetFlag={resetFlag}
                inputProps={{ name: 'level', ...register('level') }}
              />
              {errors.level && (
                <p className="text-error">{errors.level?.message}</p>
              )}
          </Grid>
        </Grid>


        <div className="dyno-break"></div>

        {/* button group */}
        <div className="d-flex flex-end jus-content-end pt-5 w-100">
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            color="secondary"
            endIcon={<ResetIcon />}
            variant="outlined"
            disabled={submitting}
            onClick={onResetForm}>
            Reset
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained">
            Thêm ngữ pháp
          </Button>
        </div>
      </form>
    </div>
  );
}

SentenceContribution.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

export default SentenceContribution;
