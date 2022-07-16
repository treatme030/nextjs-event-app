import EventList from '../components/events/event_list';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
