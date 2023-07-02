import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";
import { GetPositionById } from "../../services/positions";
import { useNavigate, useParams } from "react-router-dom";

const EditPosition = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState({
    positionName: "",
    description: "",
  });
  useEffect(() => {
    const LoadPosition = async () => {
      const position = await GetPositionById(id);
      const positionInfo = position.data.positions;
      console.log(positionInfo);
      setState((prevState) => {
        return {
          ...prevState,
          positionName: positionInfo.positionName,
          description: positionInfo.description,
        };
      });
    };
    LoadPosition();
  }, [id]);

  const handleClick = async () => {
    console.log(state);
    navigate(`/positions/list`);
  };
  return (
    <form>
      <Card title="Edit Position">
        <Input
          type="text"
          id="positionId"
          name="PositionName"
          value={state.positionName}
          title="Position Name"
          onChange={(e) => {
            setState((prevState) => {
              return {
                ...prevState,
                positionName: e.target.value,
              };
            });
          }}
        />
        <Input
          type="textarea"
          id="description"
          value={state.description}
          name="description"
          title="Description"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, description: e.target.value };
            });
          }}
        />
        <Button type="button" title="Update" onClick={handleClick} />
      </Card>
    </form>
  );
};

export default EditPosition;
