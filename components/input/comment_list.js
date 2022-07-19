import classes from './comment_list.module.css';

const CommentList = ({ items }) => {
  return (
    <ul className={classes.comments}>
      {items.map((comment) => (
        <li key={comment._id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
