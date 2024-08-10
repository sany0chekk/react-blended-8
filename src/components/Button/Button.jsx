import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';
import { useUpdateCommentCountReactionMutation } from '../../redux/commentApi';

export const Button = ({ children, counter, role = 'thumbsUp', id }) => {
  const variants = {
    [styles.thumbsUp]: role === 'thumbsUp',
    [styles.thumbsDown]: role === 'thumbsDown',
  };

  const [updateCommentCountReaction, { isError, isLoading }] =
    useUpdateCommentCountReactionMutation();

  const onBtnHandleClick = () => {
    console.log(id);

    updateCommentCountReaction({
      commentId: id,
      [role]: counter + 1,
    });
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type='button'
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        {isLoading ? <span>...</span> : counter}
        {isError && <p>Oops! its error!</p>}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
