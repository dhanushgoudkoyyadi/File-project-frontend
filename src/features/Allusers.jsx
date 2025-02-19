import React, { useEffect } from 'react';
import { useGetMutation } from '../service/leads';
import { Table, Container, Row, Col } from 'react-bootstrap';
import "./Alluser.css"

function Allusers() {
//  if(!window.localStorage.getItem("token")){
//   window.location.href = "/Login";
//  }
  const [getFile ,{data:files, isLoading, error}] = useGetMutation();

  useEffect(() => {
    getFile();
  }, [getFile]);

  console.log(files);

  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col>
            <h2 className="custom-header">Uploaded Files</h2>
            {isLoading && <div className="custom-loading">Loading...</div>}
            {error && <div className="custom-error">Error: {error.message}</div>}
            {files && (
              <Table striped bordered hover className="custom-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Filename</th>
                    <th>Original Name</th>
                    <th>Path</th>
                    <th>Size (bytes)</th>
                    <th>MIME Type</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr key={file._id}>
                      <td>{file.username}</td>
                      <td>{file.filename}</td>
                      <td>{file.originalName}</td>
                      <td>{file.path}</td>
                      <td>{file.size}</td>
                      <td>{file.mimetype}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Allusers;
