import React from "react";
import Input from "../../components/input";
import Card from "../../components/card";

const AddCandidates = () => {
  return (
    <div>
      <form>
        <Card title="Add Candidates">
          <Input
            name="candidateId"
            type="text"
            id="candidateId"
            title="Candidate ID"
          />
          <Input name="telephone" type="tel" title="Telephone" />
          <Input name="profile" type="file" title="Profile" />
          <Input name="position" type="position" title="Postion" />
        </Card>
      </form>
    </div>
  );
};

export default AddCandidates;
