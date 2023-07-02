import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Card from "../../components/card";
import Button from "../../components/button";
import { SaveCandidates } from "../../services/candidates";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select";
import { GetPositions } from "../../services/positions";

const AddCandidates = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    candidateName: "",
    telephone: "",
    profile: "",
    //PositionId does not match that of Positions.
  });

  //Position options
  const [data, setData] = useState([]);

  useEffect(() => {
    const LoadPositions = async () => {
      const positions = await GetPositions();
      const positionData = positions.data.positions;
      console.log(positionData);
      setData(
        positionData?.map((item) => {
          return {
            label: item.positionName,
            value: item.positionId,
          };
        })
      );
    };
    LoadPositions();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(state);
    const res = await SaveCandidates(state);
    console.log(res);
    if (res.status === 201) {
      toast.success("Participant successfully saved!");
      navigate("/candidates/list");
    } else {
      toast.error("Participant not saved!");
    }
    return res;
  };

  return (
    <div>
      <form>
        <Card title="Add Candidates">
          <Input
            name="candidateName"
            type="text"
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
            title="Profile"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, profile: e.target.value };
              });
            }}
          />
          <Select title="Positions" options={data} />

          <Button
            type="submit"
            title="Submit"
            onClick={(e) => {
              handleClick(e);
            }}
          />
        </Card>
      </form>
    </div>
  );
};

export default AddCandidates;
