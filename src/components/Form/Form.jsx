import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiMailSend } from 'react-icons/bi';
import styles from './Form.module.css';
import { useAddCommentsMutation } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';

export const Form = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const [addComments, { isError, isLoading }] = useAddCommentsMutation();

  const onHandleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setAuthor(value);
        break;
      case 'text':
        setContent(value);
        break;
      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    addComments({ author, content });

    setAuthor('');
    setContent('');
  };

  return (
    <div className={styles.formWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label className={styles.label}>
            <span className={styles.labelName}>Full name</span>
            <input
              type='text'
              name='name'
              className={styles.input}
              value={author}
              onChange={onHandleChange}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelName}>Your comment</span>
            <textarea
              className={styles.input}
              name='text'
              rows='5'
              value={content}
              onChange={onHandleChange}
            ></textarea>
          </label>

          <button className={styles.formBtn}>
            <BiMailSend className={styles.icon} />
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
      {isError && <p>Oops! Its error!</p>}
    </div>
  );
};
