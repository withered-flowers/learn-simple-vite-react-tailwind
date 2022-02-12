function ThirdComponentSubTableContent({ item }) {
  return (
    <tr key={item.id}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>
        <img src={item.avatar}></img>
      </td>
    </tr>
  );
}

export default ThirdComponentSubTableContent;
