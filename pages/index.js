import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head'
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'i am here',
    description: 'i am here',
    address: 'asdsfdfasa',
    image: 'https://picsum.photos/300/200',
  },
  // Add more meetups if needed
];

function Index(props) {
  return (
    <div>
      <Head>
<title>MeetUps</title>
<meta name='' content=''></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  // Fetch meetups from your database or API
  // For now, using the dummy meetups
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default Index;
