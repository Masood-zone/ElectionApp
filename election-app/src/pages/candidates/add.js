import React from "react";
import Input from "../../components/input";
import Card from "../../components/card";

const AddCandidates = () => {
  return (
    <div>
      <form>
        <Card title="Add Candidates">
          <Input
            name="candidateName"
            type="text"
            id="candidateId"
            title="Candidate Name"
          />
          <Input name="telephone" id="telephone" type="tel" title="Telephone" />
          <Input name="profile" id="profile" type="file" title="Profile" />
          <Input name="Postion" id="positionId" type="text" title="Position" />
        </Card>
      </form>
    </div>
  );
};

export default AddCandidates;
