import React, { useEffect, useState } from "react";
import { DeletePosition, GetPositions } from "../../services/positions";
import { HeaderSmall } from "../../components/header";
import { useNavigate } from "react-router-dom";

const PositionsList = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    LoadPositions();
    return () => {};
  }, []);
  const LoadPositions = async () => {
    const response = await GetPositions();
    setPositions(response.data.positions);
  };

  const handleDelete = async (positionId) => {
    const response = await DeletePosition(positionId);
    console.log(response);
    if (response?.status === 204) {
      await LoadPositions();
    }
  };
  return (
    <div>
      <HeaderSmall title="Position List" />
      <table
        className="table-bordered"
        style={{ margin: "20px auto", width: "850px" }}
      >
        <thead>
          <tr>
            <th>Position Name</th>
            <th>Description</th>
            <th>Id</th>
            <th>Remove</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {positions?.map((position, idx) => {
            return (
              <tr key={idx}>
                <td>{position?.positionName}</td>
                <td>{position?.description}</td>
                <td>{position?.id}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(position?.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      navigate(`/positions/edit/${position.id}`);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PositionsList;
