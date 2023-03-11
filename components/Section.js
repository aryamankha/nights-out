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
      <Card
        name={event.venue}
        description={event.description}
        image={event.image}
        link={event.link}
      ></Card>
    ));
    return (
      <>
        <div className="mb-5 lg:text-left text-center w-full">
          <span className="text-2xl bg-gradient-to-r bg-clip-text text-transparent font-bold from-pink-500 to-blue-500 lg:text-left text-center">
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
