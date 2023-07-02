import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { useNavigate, useParams } from "react-router-dom";
import { GetCandidateByCandidateId } from "../../services/candidates";

const EditCandidate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState({
    candidateName: "",
    telephone: "",
    profile: "",
  });

  useEffect(() => {
    const LoadCandidate = async () => {
      const candidate = await GetCandidateByCandidateId(id);
      const participant = candidate.data;
      console.log(participant);
      setState((prevState) => {
        return {
          ...prevState,
          candidateName: participant.candidateName,
          telephone: participant.telephone,
          profile: participant.profile,
        };
      });
    };
    LoadCandidate();
  }, [id]);

  const handleClick = async () => {
    navigate("/candidates/list");
  };
  return (
    <div>
      <form>
        <Card title="Edit Candidate">
          <Input
            name="candidateName"
            type="text"
            value={state.candidateName}
            id="candidateName"
            title="Candidate Name"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, candidateName: e.target.value };
              });
            }}
          />
          <Input
            name="telephone"
            id="telephone"
            type="tel"
            title="Telephone"
            value={state.telephone}
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, telephone: e.target.value };
              });
            }}
          />
          <Input
            name="profile"
            id="profile"
            type="file"
            value={state.profile}
            title="Profile"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, profile: e.target.value };
              });
            }}
          />

          <Button type="button" title="Update" onClick={handleClick} />
        </Card>
      </form>
    </div>
  );
};

export default EditCandidate;
