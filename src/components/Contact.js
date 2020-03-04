import React from "react";

const Contact = () => {
  return (
    <div className="contact mt-3 bg-light">
      <div className="row">
        <div className="col-sm align-self-center ml-4">
          <h3>Contact me</h3>

          <form
            onSubmit={e => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <div className="form-group">
              <input
                placeholder="Your name..."
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Your email..."
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Contact
            </button>
          </form>
        </div>
        <div className="col-sm">
          <img className="w-100" src="/img/map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
