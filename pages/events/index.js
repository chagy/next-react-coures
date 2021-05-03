import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="test meta" />
      </Head>
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
