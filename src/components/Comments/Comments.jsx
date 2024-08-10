import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectFilteredComents } from "../../redux/filterSlice";

export const Comments = () => {
  const filteredCommentsValue = useSelector(selectFilteredComents);
  const filteredComments = comments.filter(({ content }) =>
    content
      .toLocaleLowerCase()
      .includes(filteredCommentsValue.toLocaleLowerCase())
  );

  return (
    <Grid>
      {comments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
