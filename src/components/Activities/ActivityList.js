import ActivityItem from "./ActivityItem";
import style from "./ActivityList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import NoActivityFound from "./NoActivityFound";
import useHttp from "../../hooks/use-http";
import { getActivityList } from "../../lib/api";
import { activityActions } from "../../store/activity-slice";
import { filterActions } from "../../store/filter-slice";
import { useEffect } from "react";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";
import Pagination from "../UI/Pagination/Pagination";

const ActivityList = (props) => {
  const activities = useSelector((state) => state.activity.activities);

  const { isLoading, callApi } = useHttp();

  const totalCount = useSelector((state) => state.filter.totalCount);
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory
  );

  const skip = useSelector((state) => state.filter.skip);
  const selectedCity = useSelector((state) => state.filter.selectedCity);
  const selectedDate = useSelector((state) => state.filter.selectedDate);
  const selectedVenue = useSelector((state) => state.filter.selectedVenue);
  const dispatch = useDispatch();

  //const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  // function fetchMoreListItems() {
  //   dispatch(filterActions.setSkipActivities(50));
  //   setIsFetching(false);
  // }

  useEffect(() => {
    callApi(
      getActivityList.bind(null, {
        format_ids: "",
        category_ids: selectedCategory,
        venue_ids: selectedVenue,
        city_ids: selectedCity,
        skip: skip,
        take: totalCount,
      })
    ).then((response) => {
      if (response) {
        dispatch(filterActions.setTotalActivities(response.meta.total_count));
        dispatch(activityActions.setActivities(response.items));
        if (selectedDate !== "") {
          dispatch(activityActions.filteredByDate(selectedDate));
        }
      }
    });
  }, [
    callApi,
    dispatch,
    selectedCategory,
    selectedCity,
    totalCount,
    selectedDate,
    selectedVenue,
    skip,
  ]);
  return (
    <section className={style.activities}>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && activities.length > 0 && (
        <Pagination
          data={activities}
          RenderComponent={ActivityItem}
          pageLimit={Math.ceil(totalCount / 50)}
          dataLimit={50}
        />
      )}
      {!isLoading && activities.length === 0 && <NoActivityFound />}
      {/* {isFetching && "Fetching more list items..."} */}
    </section>
  );
};
export default ActivityList;
