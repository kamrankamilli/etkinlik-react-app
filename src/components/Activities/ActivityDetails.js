import style from "./ActivityDetails.module.css";
import Card from "../UI/Card/Card";
const ActivityDetails = (props) => {
  return (
    <section className={style.detail}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <h1>{props.title}</h1>
        {/* <address>{props.address}</address> */}
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        <div className={style.actions}>
          <a href={props.ticket_url} target="_blank" rel="noreferrer">
            Bilet Al
          </a>
        </div>
        <div className={style.actions}>
          <a
            href={`https://maps.google.com/?q=${
              props.lat || props.lng
                ? `${(props.lat, props.lng)}`
                : `${props.venueName}`
            }`}
            target="_blank"
            rel="noreferrer"
          >
            Haritada bul
          </a>
        </div>
      </Card>
    </section>
  );
};
export default ActivityDetails;
