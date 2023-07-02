import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Voters from "./voters";
import AddVoter from "./voters/add";
import VoterList from "./voters/list";
import Candidates from "./candidates";
import AddCandidates from "./candidates/add";
import CandidateList from "./candidates/list";
import EditCandidate from "./candidates/edit";
import EditVoter from "./voters/edit";
import Position from "./positions";
import AddPosition from "./positions/add";
import PositionsList from "./positions/list";
import EditPosition from "./positions/edit";

const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route index element={<Dashboard />} />

        <Route path="voters" element={<Voters />}>
          <Route path="add" element={<AddVoter />} />
          <Route path="edit/:studentId" element={<EditVoter />} />
          <Route path="list" element={<VoterList />} />
        </Route>

        <Route path="candidates" element={<Candidates />}>
          <Route path="add" element={<AddCandidates />} />
          <Route path="edit/:id" element={<EditCandidate />} />
          <Route path="list" element={<CandidateList />} />
        </Route>

        <Route path="positions" element={<Position />}>
          <Route path="add" element={<AddPosition />} />
          <Route path="edit/:id" element={<EditPosition />} />
          <Route path="list" element={<PositionsList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainApp;
