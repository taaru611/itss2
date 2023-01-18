import blogApi from 'apis/blogApi';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import SentenceContribution from './index';

function SentenceContributionData() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    const { title, desc, html, level } = formData;
    try {
      setSubmitting(true);

      const apiRes = await blogApi.postBlog(
        title,
        desc,
        html,
        level,
      );
      if (apiRes.status === 200) {
        dispatch(
          setMessage({
            type: 'success',
            message:
              'Thêm thành công',
            duration: 5000,
          }),
        );
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Thêm mới không thành công, thử lại';
      dispatch(
        setMessage({
          type: 'error',
          message,
        }),
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SentenceContribution submitting={submitting} onSubmitForm={handleSubmit} />
  );
}

export default SentenceContributionData;
