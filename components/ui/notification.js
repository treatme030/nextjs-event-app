import { useContext } from 'react';
import NotificationContext from '../../store/notification_context';
import classes from './notification.module.css';

const Notification = ({ title, message, status }) => {
  const notificationCtx = useContext(NotificationContext);

  let statusClasses = '';

  if (status === 'pending') {
    statusClasses = classes.pending;
  }
  if (status === 'success') {
    statusClasses = classes.success;
  }
  if (status === 'error') {
    statusClasses = classes.error;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
