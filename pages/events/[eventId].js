import { getEventById, getFeaturedEvents } from '../../helpers/api_util';

import EventSummary from '../../components/event_detail/event_summary';
import EventLogistics from '../../components/event_detail/event_logistics';
import EventContent from '../../components/event_detail/event_content';
import Head from 'next/head';
import Comments from '../../components/input/comments';

const EventDetailPage = ({ selectedEvent }) => {
  const event = selectedEvent;

  if (!event) {
    return (
      <>
        <Head>
          <title>{event.title}</title>
          <meta name='description' content={event.description} />
        </Head>
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
      <Comments />
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
