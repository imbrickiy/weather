import React, { useEffect } from "react";
import { Data } from "@/interface/data";

function useFetch(
  url: string,
  options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "accept-encoding": "deflate, gzip, br",
    },
  }
) {
  const [data, setData] = React.useState<Data | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url, options]);
  return { data, loading, error };
}

export default useFetch;
