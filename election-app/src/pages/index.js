import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Voters from "./Voters";
import AddVoter from "./Voters/add";
import VoterList from "./Voters/list";
import Candidates from "./Candidates";
import AddCandidates from "./Candidates/add";
import CandidateList from "./Candidates/list";
import Positions from "./Positions";
import AddPositions from "./Positions/add";
import PositionsList from "./Positions/list";

const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route index element={<Dashboard />} />

        <Route path="voters" element={<Voters />}>
          <Route path="add" element={<AddVoter />} />
          <Route path="list" element={<VoterList />} />
        </Route>

        <Route path="candidates" element={<Candidates />}>
          <Route path="add" element={<AddCandidates />} />
          <Route path="list" element={<CandidateList />} />
        </Route>

        <Route path="positions" element={<Positions />}>
          <Route path="add" element={<AddPositions />} />
          <Route path="list" element={<PositionsList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainApp;
