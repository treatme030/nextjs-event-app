import { useState } from 'react';

import classes from './comments.module.css';
import CommentList from './comment_list';
import NewComment from './new_comment';

const Comments = () => {
  const [showComments, setShowComments] = useState();

  const toggleCommentsHandler = () => {
    setShowComments((prev) => !prev);
  };

  const addCommentHandler = () => {};

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
