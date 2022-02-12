import ThirdComponentSubTableContent from "./ThirdComponentSubTableContent";

function ThirdComponentSubTable({ extData }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>avatar</th>
        </tr>
      </thead>
      <tbody>
        {/* Create the loop for rendering the data */}
        {extData.map((item) => (
          // Loop the table rows and pass the item
          <ThirdComponentSubTableContent key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default ThirdComponentSubTable;
