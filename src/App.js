import React from "react";
import { Route, Routes } from "react-router-dom";

// TODO: lazy loading tetbiq ele!!
import {
  CreateFeedback,
  Detail,
  EditFeedback,
  RoadMap,
  Suggestions,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Suggestions />} />
      <Route path="feedback">
        <Route path="create" element={<CreateFeedback />} />
        <Route path=":id">
          <Route path="edit" element={<EditFeedback />} />
          <Route path="view" element={<Detail />} />
        </Route>
      </Route>

      <Route path="roadmap" element={<RoadMap />} />
    </Routes>
  );
}

export default App;
