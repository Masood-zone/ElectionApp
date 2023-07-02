import React, { useEffect, useState } from "react";
import { DeleteCandidate, GetCandidates } from "../../services/candidates";
import { HeaderSmall } from "../../components/header";
import { useNavigate } from "react-router-dom";

const CandidateList = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    LoadCandiates();
    return () => {};
  }, []);

  const LoadCandiates = async () => {
    const response = await GetCandidates();
    console.log(response.data);
    setCandidates(response.data.candidates);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const response = await DeleteCandidate(id);
    console.log(response);
    if (response.status === 204) {
      await LoadCandiates();
    }
  };

  return (
    <div>
      <HeaderSmall title="Candidates List" />
      <table
        className="table-bordered"
        style={{ margin: "20px auto", width: "850px" }}
      >
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Telephone</th>
            <th>Position</th>
            <th>Exempt</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, idx) => {
            return (
              <tr key={idx}>
                <td
                  style={{
                    width: "50px",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={candidate?.profile}
                    alt={candidate?.candidateName}
                    style={{
                      borderRadius: "10px",
                      width: "100px",
                      height: "100px",
                    }}
                  />{" "}
                </td>
                <td>{candidate?.candidateName}</td>
                <td>{candidate?.telephone}</td>
                <td>{candidate?.id}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(candidate?.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      navigate(`/candidates/edit/${candidate?.id}`);
                    }}
                  >
                    Edit
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

export default CandidateList;
