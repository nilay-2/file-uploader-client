import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../utils/backendURL";
const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => [setFile(e.target.files[0])];

  const submitFile = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${BACKEND_URL}/uploadFile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  };

  const setCookie = async () => {
    const res = await axios.get(`${BACKEND_URL}/setCookie`);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={submitFile}>
        <label htmlFor="">Choose a file</label>
        <input type="file" onChange={handleFileChange} />
        <input type="submit" />
      </form>
      <button onClick={setCookie}>set cookie</button>
    </div>
  );
};

export default Upload;
