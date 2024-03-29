import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Thread from "./screens/Thread/Thread";
import ThreadList from "./screens/ThreadList/ThreadList";
import ThreadCreate from "./screens/ThreadCreate/ThreadCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/threads'} element={<ThreadList />} />
        <Route path={'/threads/create'} element={<ThreadCreate />} />
        <Route path={'/threads/:id'} element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;