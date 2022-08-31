import ActivityDetails from "../components/Activities/ActivityDetails";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { useParams } from "react-router-dom";
import { getActivity } from "../lib/api";
import { activityActions } from "../store/activity-slice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
const ActivityDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { activityId } = params;
  const { isLoading, callApi } = useHttp();
  const activities = useSelector((state) => state.activity.activities);

  useEffect(() => {
    callApi(getActivity.bind(null,activityId)).then((response) => {

      if (response) {
        dispatch(activityActions.setActivities([response]));
      }
    });
  }, [dispatch, callApi, activityId]);
  return (
    <>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (activities!==null) && (
        <ActivityDetails
          title={activities[0].name}
          content={activities[0].content}
          image={activities[0].poster_url}
          ticket_url={activities[0].ticket_url}
          venueName={activities[0].venue.name}
          lat={activities[0].lat}
          lng={activities[0].lng}
        ></ActivityDetails>
      )}
    </>
  );
};
export default ActivityDetail;
