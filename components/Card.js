export default function Card(props) {
  return (
    <div className="card glass w-80">
     <figure>
       <img src="https://placeimg.com/400/225/arch" alt="car!" />
     </figure>
     <div className="card-body">
       <h2 className="card-title">{props.name}</h2>
       <p>{props.details}</p>
       <div className="card-actions justify-end">
         <a className="btn btn-primary" href={props.link}>
           Get ticket
         </a>
       </div>
     </div>
    </div>
  );
}
