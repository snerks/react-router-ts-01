import React from "react";
import { MyForm } from "./MyForm";

const MyFormPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={({ email, firstName, lastName }) => {
          console.log(email, firstName, lastName);
        }}
      />
    </div>
  );
};

export default MyFormPage;
