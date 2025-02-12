import React, { useState } from 'react';
import { useAddMutation } from '../service/leads';
import 'bootstrap/dist/css/bootstrap.min.css';
import './board.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [add] = useAddMutation();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !username) {
      alert('Please enter a username and select a file to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', username); 

      await add(formData).unwrap();
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="p-4 rounded border bg-light">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" className="form-control" onChange={handleUsernameChange} />
          <label htmlFor="fileInput" className="form-label mt-3">Choose File</label>
          <input type="file" name="file" id="fileInput" className="form-control" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-success mt-3">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
