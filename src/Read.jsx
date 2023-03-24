import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center text-uppercase">Details of user</h1>
        <hr />

        <div className="mb-2 mt-4 text-xl read">
          <strong className="d-flex align-items-center">
            <i className="fa-solid fa-user me-2"></i> {data.name}
          </strong>
        </div>

        <div className="mb-2 text-xl read">
          <strong className="d-flex align-items-center">
            <i className="fa-solid fa-envelope me-2"></i> {data.email}
          </strong>
        </div>

        <div className="mb-4 text-xl read">
          <strong className="d-flex align-items-center">
            <i className="fa-solid fa-phone me-2"></i> {data.phone}
          </strong>
        </div>

        <Link to={`/update/${id}`} className="btn btn-primary me-2">
          {" "}
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <Link to="/" className="btn btn-dark">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
