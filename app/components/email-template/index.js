import * as React from "react";

export const EmailTemplate = ({ message, userName, email, phone }) => (
  <div>
    <div>
      <h3>
        Wiadomość od{" "}
        <span>
          {userName} {email} {phone}
        </span>
      </h3>
      <p>{message}</p>
    </div>
  </div>
);
