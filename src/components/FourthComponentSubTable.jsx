import FourthComponentSubTableContent from "./FourthComponentSubTableContent";

function FourthComponentSubTable({ extData, setSelectedEmail }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>avatar</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {/* Create the loop for rendering the data */}
        {extData.map((item) => (
          // Loop the table rows and pass the item
          // and pass the setSelectedEmail function from props
          <FourthComponentSubTableContent
            key={item.id}
            item={item}
            setSelectedEmail={setSelectedEmail}
          />
        ))}
      </tbody>
    </table>
  );
}

export default FourthComponentSubTable;
