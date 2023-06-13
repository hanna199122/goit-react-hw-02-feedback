import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log(options);

  return (
    <ul className={css.feedbackList}>
      <button onClick={onLeaveFeedback} className={css['feedbackList__item']}>
        Good
      </button>
      <button onClick={onLeaveFeedback} className={css['feedbackList__item']}>
        Neutral
      </button>
      <button onClick={onLeaveFeedback} className={css['feedbackList__item']}>
        Bad
      </button>
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.string,
  options: PropTypes.string,
};
