import { useState, useEffect } from "react";
import FourthComponentSubTable from "./FourthComponentSubTable";
import FourthComponentSubInput from "./FourthComponentSubInput";

function FourthComponent() {
  // state for fetched external data
  // initial value is an empty array
  const [extData, setExtData] = useState([]);

  // state for selected row (we only fetch the email, so initial state will be string)
  const [selectedExtData, setSelectedExtData] = useState("");

  // declare function to set the selected email
  const setSelectedEmail = (email) => {
    setSelectedExtData(email);
  };

  // we will fetch the data when this FourthComponent is rendered
  // using the useEffect hook to fetch the data
  useEffect(
    // this is the callback handler
    () => {
      const fetchData = async () => {
        // fetch data from external API
        const response = await fetch("https://reqres.in/api/users");
        const jsonData = await response.json();

        // set fetched data to state
        setExtData(jsonData.data.slice(3, 6));
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
      <h2 className="h2">Fourth Component</h2>
      <FourthComponentSubInput
        selectedExtData={selectedExtData}
      ></FourthComponentSubInput>
      {/* pass the setSelectedEmail function here */}
      <FourthComponentSubTable
        extData={extData}
        setSelectedEmail={setSelectedEmail}
      ></FourthComponentSubTable>
    </div>
  );
}

export default FourthComponent;
