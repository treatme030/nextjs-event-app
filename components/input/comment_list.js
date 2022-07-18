import classes from './comment_list.module.css';

const CommentList = () => {
  return (
    <ul className={classes.comments}>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
