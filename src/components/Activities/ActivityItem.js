import style from "./ActivityItem.module.css";
import Card from "../UI/Card/Card";
import { formatDate } from "../../helper/FormatDate";
import { Link } from "react-router-dom";
const ActivityItem = (props) => {
  const date = formatDate(props.date);
  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <time>{date}</time>
          <address>{props.address}</address>
        </div>
        <div className={style.actions}>
          <Link className="link" to={`/etkinlik/${props.id}`}>
            Show Details
          </Link>
        </div>
      </Card>
    </li>
  );
};
export default ActivityItem;
