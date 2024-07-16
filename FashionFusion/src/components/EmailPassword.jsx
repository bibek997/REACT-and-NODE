import React from "react";
import Error from "../components/Error.jsx";

const EmailPassword = ({ values, setValues, errors, setErrors }) => {
  const handleChange = (e) => {
    const { name, value, pattern } = e.target;
    let error = "";

    if (pattern && !new RegExp(pattern).test(value)) {
      error = e.target.validationMessage;
    }

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <div className="w-11/12">
      <p className="text-base my-3">Email</p>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        className="border rounded-md p-1 w-full"
        onChange={handleChange}
        pattern="^[a-zA-Z0-9._%+-]+@patancollege.edu.np$"
        required
      />
      {errors.email && <Error message={errors.email} />}
      <p className="text-base my-3">Password</p>
      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="Enter your password"
        className="border rounded-md p-1 w-full"
        onChange={handleChange}
        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n]).*$"
        required
      />
      {errors.password && <Error message={errors.password} />}
    </div>
  );
};

export default EmailPassword;
