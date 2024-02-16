import { useEffect, useState } from "react";
import axios from "axios";

const OfficialsList = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/officials");
    const data = response.data;
    setList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ol>
      {list.map((item) => {
        return <li key={item.id}>{item.nombre}</li>;
      })}
    </ol>
  );
};

export default OfficialsList;
