import { getEventById, getFeaturedEvents } from '../../helpers/api_util';

import EventSummary from '../../components/event_detail/event_summary';
import EventLogistics from '../../components/event_detail/event_logistics';
import EventContent from '../../components/event_detail/event_content';
import ErrorAlert from '../../components/ui/error_alert';

const EventDetailPage = ({ selectedEvent }) => {
  const event = selectedEvent;

  if (!event) {
    return (
      <>
        <div className='center'>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  const { title, date, location, image, description } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;

export const getStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
