import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/events_search';
import EventList from '../../components/events/event_list';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
