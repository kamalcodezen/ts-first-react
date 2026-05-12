import { MouseEvent } from "react";

const ListGroup = () => {
  const cities = ["kolkata", "Delhi", "mumbai", "Up"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>Cities Not Fund</p>}
      <ul className="list-group">
        {cities.map((city, i) => (
          <li key={i} onClick={handleClick} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
