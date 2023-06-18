import React, { useState } from "react";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";

const AddPositions = () => {
  const [state, setState] = useState({
    positionName: "",
    description: "",
  });
  const handleClick = () => {
    console.log(state);
  };

  return (
    <form
      onSubmit={() => {
        handleClick();
      }}
    >
      <Card title="Add Positions">
        <Input
          type="text"
          id="positionId"
          name="PositionName"
          title="Position Name"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, positionName: e.target.value };
            });
          }}
        />
        <Input
          type="textarea"
          id="description"
          name="description"
          title="Description"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, description: e.target.value };
            });
          }}
        />
        <Button type="submit" title="Submit" />
      </Card>
    </form>
  );
};

export default AddPositions;
