import Card from "./Card";

export default function Section(props) {
  return (
    <>
      <div className="w-2/3 mb-5">
        <span className="text-2xl bg-gradient-to-r bg-clip-text text-transparent font-bold from-pink-500 to-blue-500">
          {props.date}
        </span>
      </div>
      <div
        className={` grid-rows-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-6`}
      >
        <Card
          name="Hotel Chantelle"
          details="A three-story party that never stops"
          link="https://linkstub.com/drmK04QCHp?ref=CIgg3"
        ></Card>
        <Card
          name="The DL"
          details="A three-story party that never stops"
          link="https://linkstub.com/drmK04QCHp?ref=CIgg3"
        ></Card>
        <Card
          name="The Delancey"
          details="A three-story party that never stops"
          link="https://linkstub.com/drmK04QCHp?ref=CIgg3"
        ></Card>
        <Card
          name="La Caverna"
          details="An underground cavern where anything could happen"
          link="https://linkstub.com/drmK04QCHp?ref=CIgg3"
        ></Card>
      </div>
    </>
  );
}
