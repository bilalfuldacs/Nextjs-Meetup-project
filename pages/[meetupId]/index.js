import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetUpDetails() {
  return (
    <MeetupDetails
      image="https://picsum.photos/300/200"
      title=" first meetup"
      address=" leipziger strasse "
      description=" i am here "
    />
  );
}
export async function getStaticPatths(){
  return {
    fallback:false,
    paths:[
{paramas:{
  meetuupid:'m1',
}},
{paramas:{
  meetuupid:'m2',
}}
    ]
  }
}
export async function getStaticProps(context) {
  const params = context.params.meetupid;

  return {
    props: {
      meetups: {
        id:params,
        image: "https://picsum.photos/300/200",
        title: " first meetup",
        address: " leipziger strasse ",
        description: " i am here ",
      },
    },
  };
}
export default MeetUpDetails;
