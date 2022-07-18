import { useEffect, useState } from 'react';

import classes from './comments.module.css';
import CommentList from './comment_list';
import NewComment from './new_comment';

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState();
  const [comments, setCommets] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => setCommets(data.comments));
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prev) => !prev);
  };

  const addCommentHandler = (commentData) => {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.comment));
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
};

export default Comments;
