// ****---- Alert Component not Used Bcz it had issues ----**** //
import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>:{props.alert.msg}
          <button
            type="button"
            className="btn btn-close"
            data-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
