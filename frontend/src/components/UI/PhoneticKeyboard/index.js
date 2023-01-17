import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

const IPA_CHARS = [
  'あ','い','う','え','お',
  'か','き','く','け','こ',
  'さ','し','す','せ','そ',
  'な','に','ぬ','ね','の',
  'ま','み','む','め','も',
  'や',     'ゆ',     'よ',
  'わ','っ','を',     'ん',
  'が','ぎ','ぐ','げ','ご',
  'ざ','じ','ず','ぜ','ぞ',
  'だ','ぢ','づ','で','ど',
  'ば','び','ぶ','べ','ぼ',
  'ぱ','ぴ','ぷ','ぺ','ぽ',
  'きゃ',  'きゅ',  'きょ',
  'しゃ',  'しゅ',  'しょ',
  'ちゃ',  'ちゅ',  'ちょ',
  'にゃ',  'にゅ',  'にょ',
  'みゃ',  'みゅ',  'みょ',
  'ひゃ',  'ひゅ',  'ひょ',
  'りゃ',  'りゅ',  'りょ',
  'ぎゃ',  'ぎゅ',  'ぎょ',
  'じゃ',  'じゅ',  'じょ',
  'びゃ',  'びゅ',  'びょ',
  'ぴゃ',  'ぴゅ',  'ぴょ',
];

function PhoneticKeyboard({ onClose, onInput }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {IPA_CHARS.map((c, index) => (
        <span key={index} onClick={() => onInput(c)}>
          {c}
        </span>
      ))}

      <span onClick={onClose} className="close">
        Close
      </span>
    </div>
  );
}

PhoneticKeyboard.propTypes = {
  onClose: PropTypes.func,
  onInput: PropTypes.func,
};

PhoneticKeyboard.defaultProps = {
  onClose: function () {},
  onInput: function () {},
};

export default PhoneticKeyboard;
