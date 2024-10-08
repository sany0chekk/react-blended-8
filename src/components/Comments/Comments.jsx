import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
// import { comments } from '../../helpers/comments';
import { useSelector } from 'react-redux';
import { selectFilteredComents } from '../../redux/filterSlice';
import { useGetCommentsQuery } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';

export const Comments = () => {
  const { data: comments, isError, isLoading } = useGetCommentsQuery();

  const filteredCommentsValue = useSelector(selectFilteredComents);
  const filteredComments = comments?.filter(({ content }) =>
    content
      .toLocaleLowerCase()
      .includes(filteredCommentsValue.toLocaleLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Opps! Its error!</p>}
      <Grid>
        {comments &&
          filteredComments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
      </Grid>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
