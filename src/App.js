import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const records = [
  {
    name: "John Doe",
    title: "Software Engineer",
    type: "Full-time",
    description: "John Doe is a software engineer."
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleUpdate = () => {
    setShowModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate loading completion after 5 seconds
    }, 5000);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ flexDirection: "row" }}>
        <h1>Search Person</h1>
        <input
          type="text"
          placeholder="Enter name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button
          style={{ padding: "8px 15px", marginTop: "10px" }}
          onClick={handleUpdate}
        >
          Search
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h3>{records[0].name}</h3>
        <p>Title: {records[0].title}</p>
        <p>Type: {records[0].type}</p>
        <p>Description: {records[0].description}</p>
        <button
          onClick={handleUpdate}
          style={{ padding: "8px 15px", marginTop: "10px" }}
        >
          Update
        </button>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        centered
        style={{ backdropFilter: "blur(5px)" }} 
      >
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height: "250px",
            justifyContent:"center"
          }}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin size="5x" />
          ) : (
            <div style={{ flexDirection: "row", alignItems: "center" }}>
              <div style={{ marginBottom: "10px" }}>
                <FontAwesomeIcon icon={faSpinner} spin size="2x" style={{ color: "gray" }} />
                <span style={{ marginLeft: "10px" }}>Processing</span>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <FontAwesomeIcon icon={faCheck} size="2x" style={{ color: "green" }} />
                <span style={{ marginLeft: "10px" }}>Completed</span>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <FontAwesomeIcon icon={faTimes} size="2x" style={{ color: "red" }} />
                <span style={{ marginLeft: "10px" }}>Failed</span>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{alignItems:'center',justifyContent:'center'}}>
          <button
            onClick={() => {
              setShowModal(false);
              setLoading(true);
              setSearchTerm("");
            }}
            style={{ padding: "8px 15px" }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
