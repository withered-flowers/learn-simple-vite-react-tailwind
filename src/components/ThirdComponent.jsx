import { useState, useEffect } from "react";
import ThirdComponentSubTable from "./ThirdComponentSubTable";

function ThirdComponent() {
  // state for fetched external data
  // initial value is an empty array
  const [extData, setExtData] = useState([]);

  // we will fetch the data when this ThirdComponent is rendered
  // using the useEffect hook to fetch the data
  useEffect(
    // this is the callback handler
    () => {
      const fetchData = async () => {
        // fetch data from external API
        const response = await fetch("https://reqres.in/api/users");
        const jsonData = await response.json();

        // set fetched data to state
        setExtData(jsonData.data.slice(0, 3));
      };

      // we will fetch the data from the external API
      // using the methods that we have created
      // the fetchExternalData method
      fetchData();

      // this is the same as componentDidMount

      // this is the same as componentDidUnmount
      return () => {};
    },
    // we will need an empty array here
    // to avoid infinite loop
    []
  );

  return (
    <div>
      <h2 className="h2">Third Component</h2>
      <ThirdComponentSubTable extData={extData}></ThirdComponentSubTable>
    </div>
  );
}

export default ThirdComponent;
