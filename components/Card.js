export default function Card(props) {
  let image = props.image;
  if (image == null) {
    image = "https://clubbookers.com/wp-content/uploads/2022/11/Club-Space.jpg";
  }

  return (
    <div className="card glass w-80">
      <figure>
        <img src={image} alt="Get Lit!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={props.link}>
            Get ticket
          </a>
        </div>
      </div>
    </div>
  );
}
