"use client"

import { useState, useEffect } from "react"
import { useGetQuery } from "../service/leads"
import { Table, Container, Row, Col } from "react-bootstrap"
import "./User.css"

function User() {
  const { data: files, isLoading, error, refetch } = useGetQuery()
  const [search, setSearch] = useState("")

  useEffect(() => {
    refetch()
  }, [refetch])

  const fileList = files?.files || []

  return (
    <div className="user-container">
      <form className="search-form" role="search">
        <input
          className="search-input"
          type="search"
          placeholder="Search files..."
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Container>
        <Row className="my-4">
          <Col>
            <h2 className="custom-header">Uploaded Files</h2>
            {isLoading && <div className="custom-loading">Loading...</div>}
            {error && <div className="custom-error">Error: {error.message}</div>}
            {fileList.length > 0 ? (
              <div className="table-container">
                <Table striped bordered hover className="custom-table">
                  <thead>
                    <tr>
                    
                      <th>Filename</th>
                      <th>Path</th>
                      <th>Size (bytes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fileList
                      .filter((file) => file.filename.toLowerCase().includes(search.toLowerCase()))
                      .map((file, index) => (
                        <tr key={index} className="table-row">
                          
                          <td>{file.filename}</td>
                          <td>{file.path}</td>
                          <td>{file.size}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="custom-error">No files found.</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default User

