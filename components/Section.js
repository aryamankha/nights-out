import Card from "./Card";

export default function Section(props) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(props.date).toLocaleDateString("en-us", options);
  const eventList = props.eventList;

  if (eventList.length > 0) {
    const eventCards = eventList.map((event) => (
      <Card name={event.venue} details="An event" link={event.link}></Card>
    ));
    return (
      <>
        <div className="w-2/3 mb-5">
          <span className="text-2xl bg-gradient-to-r bg-clip-text text-transparent font-bold from-pink-500 to-blue-500">
            {date}
          </span>
        </div>
        <div
          className={` grid-rows-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-6`}
        >
          {eventCards}
        </div>
      </>
    );
  }
}
