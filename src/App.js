import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const records = [
  {
    name: "John Doe",
    title: "Senior Software Engineer",
    type: "Full-time",
    description: "John Doe is a highly skilled software engineer with over 10 years of experience in building scalable web applications, specializing in front-end development with React and back-end services using Node.js.",
    location: "San Francisco, CA",
    yearsOfExperience: 10,
    skills: ["React", "Node.js", "JavaScript", "AWS", "Docker"],
    education: "Bachelor's Degree in Computer Science",
    certifications: ["AWS Certified Solutions Architect", "Certified Kubernetes Administrator"],
    availability: "Immediate",
    contactEmail: "john.doe@example.com"

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
      setLoading(false);
    }, 5000);
  };

  return (
    <><div
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
          style={{ padding: "8px", marginRight: "10px", width: "500px" }}
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
          width: "800px",
        }}
      >
        <div style={{
          textAlign: "center",

        }}>
          <h3>{records[0].name}</h3>
          <p><b> Title:</b> {records[0].title}</p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "20px"
        }}
        >
          <div style={{
            width: "400px"
          }}>
            <p><b>Type:</b> <span>{records[0].type}</span></p>
            <p><b>Description:</b> {records[0].description}</p>
            <p><b>location:</b> {records[0].location}</p>
          </div>
          <div style={{
            width: "400px"
          }}>
            <p><b> years Of Experience:</b> {records[0].yearsOfExperience}</p>
            <p><b>skills:</b> {records[0].skills}</p>
            <p><b>education:</b> {records[0].education}</p>
            <p><b>certifications:</b> {records[0].certifications}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button
            onClick={handleUpdate}
            style={{ padding: "8px 15px", marginTop: "10px", }}
          >
            Update
          </button>
        </div>
      </div>


    </div>
      <div style={{}}>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          centered
          style={{ backdropFilter: "blur(5px)", marginTop: "0px" }}
        >
          <Modal.Body
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // textAlign: "center",
              height: "250px",
              justifyContent: "center",
              padding:"180px"
            }}
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin size="5x" />
            ) : (
              <div style={{ flexDirection: "row", alignItems: "center" }}>
                <div style={{ marginBottom: "10px",flexDirection: "row" }}>
                <span style={{width:"50px"}}><FontAwesomeIcon icon={faSpinner} spin size="2x" style={{ color: "gray" }} /></span>
                  <span style={{ marginLeft: "10px" }}>Processing</span>
                </div>
                <div style={{ marginBottom: "10px",flexDirection: "row" }}>
                  <FontAwesomeIcon icon={faCheck} size="2x" style={{ color: "green" }} />
                  <span style={{ marginLeft: "10px" }}>Completed</span>
                </div>
                <div style={{ marginBottom: "10px",flexDirection: "row" }}>
                  <FontAwesomeIcon icon={faTimes} size="2x" style={{ color: "red" }} />
                  <span style={{ marginLeft: "10px" }}>Failed</span>
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: 'center',alignItems:'flex-start' }}>
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

      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script> */}
    </>
  );
};

export default App;
