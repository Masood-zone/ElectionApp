import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { GetVoterByStudentId, SaveVoter } from "../../services/voters";
import { useNavigate, useParams } from "react-router-dom";

const EditVoter = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [state, setState] = useState({
    studentId: "",
    studentName: "",
    email: "",
    telephone: "",
    password: "",
  });

  useEffect(() => {
    const LoadStudent = async () => {
      const student = await GetVoterByStudentId(studentId);
      const voter = student.data;
      console.log(voter);
      setState((prevState) => {
        return {
          ...prevState,
          studentId: voter.studentId,
          studentName: voter.studentName,
          email: voter.email,
          password: voter.password,
          telephone: voter.telephone,
        };
      });
    };
    LoadStudent();
  }, [studentId]);

  const handleClick = async () => {
    // console.log(state);
    const res = await SaveVoter(state);
    navigate("/voters/list");
    return res;
  };

  return (
    <Card title="Edit Student Information">
      <form>
        <Input
          name="studentId"
          id="studentId"
          value={state.studentId}
          type="text"
          title="Student ID"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, studentId: e.target.value };
            });
          }}
        />
        <Input
          label="studentName"
          name="studentName"
          id="studentName"
          value={state.studentName}
          type="text"
          title="Student Name"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, studentName: e.target.value };
            });
          }}
        />

        <Input
          label="email"
          name="email"
          id="email"
          value={state.email}
          type="email"
          title="Email"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, email: e.target.value };
            });
          }}
        />

        <Input
          label="telephone"
          name="telephone"
          id="telephone"
          value={state.telephone}
          type="tel"
          title="Telephone"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, telephone: e.target.value };
            });
          }}
        />

        <Input
          label="password"
          name="password"
          id="password"
          value={state.password}
          type="password"
          title="Password"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, password: e.target.value };
            });
          }}
        />

        <Button type="button" title="Update" onClick={handleClick} />
      </form>
    </Card>
  );
};

export default EditVoter;
