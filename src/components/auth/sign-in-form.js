import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          type="email"
          title="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          type="password"
          title="Password"
          name="password"
          component={FormInput}
        />
        <Field
          onClick={() => console.log("tryna submit")}
          className="sign-in-form__login"
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
