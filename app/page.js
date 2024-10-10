"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...maintask];
    maintask.splice(i, 1);
    setmaintask(copytask);
  };

  let renderTask = <h2>No Task Availble</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <>
          <li key={i} className="flex justify-between">
            <div>
              <h5>{t.title}</h5>
              <h6>{t.desc}</h6>
            </div>

            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="border-gray-300 border-2  rounded-lg text-center px-4 py-3 font-sans font-semibold bg-red-500 text-white"
            >
              Delete
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="bg-gray-600 font-extrabold text-2xl text-center py-2 my-4 text-white">
        MY TODO LIST
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-gray-500 border-4 p-2 mx-16"
          placeholder="Enter the task"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          className="border-gray-500 border-4 p-2 mx-16"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />

        <button className="border-gray-300 border-2  rounded-lg text-center px-4 py-3 font-sans font-semibold bg-yellow-300 text-black">
          Add
        </button>
      </form>

      <div>{renderTask}</div>
    </>
  );
};

export default page;
