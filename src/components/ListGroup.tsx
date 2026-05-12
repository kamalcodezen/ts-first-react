const ListGroup = () => {
  const cities = ["kolkata", "Delhi", "mumbai", "Up"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city, i) => (
          <li key={i} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
