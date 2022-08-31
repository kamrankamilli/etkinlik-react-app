import { useCallback,useState} from "react";



const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(
    async (api) => {
      setIsLoading(true);
      let data = null;
      try {
        const response = await api();
        if (!response.ok) {
          setError(response.message);
        } else {
          data = await response.json();
          //data = response.data;
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
      return data;
    },
    []
  );

  return { isLoading,  callApi };
};
export default useHttp;
