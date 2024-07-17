/* eslint-disable react/prop-types */
export default function Cards(props) {
  return (
    <div className="post">
      <img className="card--image" src={props.imageUrl} />
      <div className="card">
        <div className="location-related">
          <p className="card--location">{props.location}</p>
          <a href={props.googleMapsUrl} className="card--googleMapsUrl">
            Visit on google maps
          </a>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--startDate">{props.startDate}</p>
        <p className="card--endDate">{props.endDate}</p>
        <p className="card--description">{props.enddescriptionDate}</p>
      </div>
    </div>
  );
}

{
  /* <img src={`../images/${props.imageUrl}`} className="card--image" />
<div className="card--stats">
  <img src="../images/star.png" className="card--star" />
  <span>{props.stats.rating}</span>
  <span className="gray">({props.reviewCount}) • </span>
  <span className="gray">{props.location}</span>
</div>
<p className="card--price">
<span className="bold">From ${props.price}</span> / person
</p> */
}
