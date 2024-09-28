import { useEffect, useState } from "react";

export default function useFetcherEffect({ url }: { url: string }) {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${url}`);
        if (response.ok) {
          const responseData = await response.json();
          setResponseData(responseData);
        } else {
          const responseData = await response.json();
          console.log(responseData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(responseData);
  return responseData;
}
