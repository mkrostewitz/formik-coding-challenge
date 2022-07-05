import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Join our Network</h1>
    <Formik
      initialValues={{
        userType: "",
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          <label htmlFor="userType">I am a </label> <br />
          <Field id="userType" list="userOptions" name="userType" />
          <datalist id="userOptions">
            <option value="Customer" />
            <option value="Manufacturer (OEM)" />
            <option value="Sales Representative" />
          </datalist>
        </div>

        <div>
          <label htmlFor="firstName">First Name</label> <br />
          <Field id="firstName" name="firstName" placeholder="Jane" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <Field id="lastName" name="lastName" placeholder="Doe" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
