import React, { useRef } from "react";
import { Route, Routes, useLoaderData, useLocation } from "react-router-dom";
import Display_Home from "./Display_Home";
import DisplayAlbum from "./DisplayAlbum";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:W-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<Display_Home />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
