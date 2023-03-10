import Section from "./Section";

export default function EventGrid(props) {
  const events = props.events;

  if (Object.keys(events).length > 0) {
    const sections = [];
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    for (var date in events) {
      if (new Date(date) > yesterday) {
        sections.push(
          <Section key={date} date={date} eventList={events[date]}></Section>
        );
      }
    }
    return <div>{sections}</div>;
  }
}
