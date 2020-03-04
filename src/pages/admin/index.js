import React from "react";

import Resume from "../../components/Resume/";

const Admin = ({ resume, loading }) => {
  return (
    <div className="admin">
      <div className="d-flex justify-content-between mb-3">
        <h3>Modify resume</h3>
        <button
          className="btn btn-success"
          onClick={e => alert("Resume saved!")}
        >
          Save
        </button>
      </div>
      {!loading && <Resume resume={resume} editable />}
    </div>
  );
};

export default Admin;
