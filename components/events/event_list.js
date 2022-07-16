import EventItem from './event_item';
import classes from './event_list.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
};

export default EventList;
