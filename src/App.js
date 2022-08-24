import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import categories from "./data/categories.json";
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
      <Route path="/" element={<Suggestions/>} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/createFeedback" element={<CreateFeedback />} />
      <Route path="/editFeedback" element={<EditFeedback />} />
      <Route path="/roadmap" element={<RoadMap />} />
    </Routes>
  );
}

export default App;
