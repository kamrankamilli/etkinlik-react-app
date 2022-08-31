import Input from "../UI/Input/Input";
import SelectBox from "../UI/SelectBox/SelectBox";
import style from "./Filter.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { activityActions } from "../../store/activity-slice";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { getVenues, getCategories, getCities } from "../../lib/api";
import { filterActions } from "../../store/filter-slice";

const Filter = (props) => {
  const selectedDate = useSelector((state) => state.filter.selectedDate);

  const selectedCity = useSelector((state) => state.filter.selectedCity);
  // const selectedVenue = useSelector((state) => state.filter.selectedVenue);
  const categories = useSelector((state) => state.activity.categories).map(
    (category) => category
  );
  const cities = useSelector((state) => state.activity.cities).map(
    (city) => city
  );
  const venues = useSelector((state) => state.activity.venues).map(
    (venue) => venue
  );

  const { callApi } = useHttp();

  const dispatch = useDispatch();

  const filterResetHandler = () => {
    dispatch(filterActions.resetFilter());

  };

  useEffect(() => {
    callApi(getCategories).then((response) => {
      if (response) {
        dispatch(activityActions.setCategories(response));
      }
    });
    callApi(getCities).then((response) => {
      if (response) {
        dispatch(activityActions.setCities(response));
      }
    });
  }, [dispatch, callApi]);

  const onChangeCategoryHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const category_id =
      el.getAttribute("data-id") !== "0" ? el.getAttribute("data-id") : "";
    dispatch(filterActions.setSelectedCategory(category_id));
  };

  const onChangeCityHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const city_id =
      el.getAttribute("data-id") !== "0" ? el.getAttribute("data-id") : "";
    dispatch(filterActions.setSelectedCity(city_id));
    callApi(
      getVenues.bind(null, {
        city_ids: city_id,
        district_ids: "",
        neighborhood_ids: "",
        status_ids: "",
        skip: "",
        take: "10000",
      })
    ).then((response) => {
      if (response) {
        dispatch(activityActions.setVenues(response.items));
      }
    });
  };
  const onChangeVenueHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const venue_id =
      el.getAttribute("data-id") !== "0" ? el.getAttribute("data-id") : "";
    dispatch(filterActions.setSelectedVenue(venue_id));
  };

  const onChangeDateHandler = (event) => {
    dispatch(filterActions.setSelectedDate(event.target.value));
  };

  return (
    <section>
      <Card>
        <div className={style.fields}>
          <SelectBox
            id="category"
            options={[
              { id: 0, name: "Tüm Kategoriler", slug: "tum-kategoriler" },
              ...categories,
            ]}
            onChange={onChangeCategoryHandler}
          ></SelectBox>
          <SelectBox
            id="city"
            options={[
              { id: 0, name: "Tüm Şehirler", slug: "tum-sehirler" },
              ...cities,
            ]}
            onChange={onChangeCityHandler}
            
          ></SelectBox>
          <SelectBox
            id="venue"
            options={[
              { id: 0, name: "Tüm Mekanlar", slug: "tum-mekanlar" },
              ...venues,
            ]}
            onChange={onChangeVenueHandler}

          ></SelectBox>
          <Input
            type="date"
            id="date"
            onChange={onChangeDateHandler}
            inputValue={selectedDate}
          ></Input>
        </div>
        <Button onClick={filterResetHandler}>Filtre Temizle</Button>
      </Card>
    </section>
  );
};
export default Filter;
