import { useState, useEffect } from "react";
import axios from "axios";

export const useCandidates = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const data = await axios
        .get(process.env.API_HOST + "/candidates/")
        .then((res) => {
          console.log(res);
          return res.data;
        });
      setData(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading, error, refetch: fetchData };
};
