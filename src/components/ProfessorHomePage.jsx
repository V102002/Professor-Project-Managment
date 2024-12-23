import React, { useState } from "react";
import './ProfessorHomePage.css';
function ProfessorHomePage({ onNavigate }) {
  const [teams, setTeams] = useState([]);

  const handleTeamClick = () => {
    onNavigate("dashboard");
  };

  // Function to add a new team
  const addTeam = () => {
    const newTeam = { name: "Team C", project: "Project 3" }; // Example new team
    setTeams([...teams, newTeam]); // Add the new team to the list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Professor Home Page</h1>
      <button onClick={() => onNavigate("projects")}>My Projects</button>
      <button onClick={addTeam} style={{ marginLeft: "10px" }}>
        Add Team
      </button>
      <div style={{ marginTop: "20px" }}>
        {teams.length === 0 ? (
          <p>No Teams :(</p>
        ) : (
          teams.map((team, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={handleTeamClick}
            >
              <p>Team Name: {team.name}</p>
              <p>Project Name: {team.project}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProfessorHomePage;
