function FourthComponentSubTableContent({ item, setSelectedEmail }) {
  return (
    <tr>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>
        <img src={item.avatar}></img>
      </td>
      <td>
        <button className="btn" onClick={() => setSelectedEmail(item.email)}>
          Choose Me pl0x
        </button>
      </td>
    </tr>
  );
}

export default FourthComponentSubTableContent;
