const ENDPOINT_BASE_URL = "https://backend.etkinlik.io/api/v2";

const API_TOKEN = process.env.REACT_APP_X_ETKINLIK_TOKEN;

const buildDefaultConfig = (resource, config = null) => {
  return {
    url: `${ENDPOINT_BASE_URL}/${resource}`,
    config: config
      ? config
      : {
          headers: {
            "Content-Type": "application/json",
            "X-Etkinlik-Token": API_TOKEN,
          },
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        },
  };
};

export const getActivityList = async (queryParams) => {
  for (const key of Object.keys(queryParams)) {
    if (queryParams[key] === "") {
      delete queryParams[key];
    }
  }
  const ret = [];
  for (let param in queryParams) {
    ret.push(
      encodeURIComponent(param) + "=" + encodeURIComponent(queryParams[param])
    );
  }
  const { url, config } = buildDefaultConfig(`events?${ret.join("&")}`);
  
  const response = await fetch(url, config);
  return response;
};

export const getActivity = async (activityId) => {
  const { url, config } = buildDefaultConfig(`events/${activityId}`);
  const response = await fetch(url, config);
  return response;
};

export const getCategories = async () => {
  const { url, config } = buildDefaultConfig("categories");
  const response = await fetch(url, config);
  return response;
};

export const getCities = async () => {
  const { url, config } = buildDefaultConfig("cities");
  const response = await fetch(url, config);
  return response;
};

export const getVenues = async (queryParams) => {
  for (const key of Object.keys(queryParams)) {
    if (queryParams[key] === "") {
      delete queryParams[key];
    }
  }
  const ret = [];
  for (let param in queryParams) {
    ret.push(
      encodeURIComponent(param) + "=" + encodeURIComponent(queryParams[param])
    );
  }
  const { url, config } = buildDefaultConfig(`venues?${ret.join("&")}`);

  const response = await fetch(url, config);
  return response;
}
