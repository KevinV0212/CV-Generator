import { useState } from "react";
import Input from "../Input/Input";
import {
  validate,
  validateEmail,
  validateNonEmpty,
  validatePhone,
} from "../../validation/validation";

export default function BasicForm({
  data,
  handleInputChange,
  errors,
  handleErrors,
}) {
  const updateData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    handleErrors({ ...errors, [name]: "" });
    handleInputChange({ ...data, [name]: value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        name="firstName"
        id="firstName"
        label="First Name"
        value={data.firstName}
        placeholder="Ex: Roger"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors({ ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.firstName ? (
        <span className="error">{errors.firstName}</span>
      ) : null}
      <Input
        name="lastName"
        id="lastName"
        label="LastName"
        value={data.lastName}
        placeholder="Ex: Federer"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors({ ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.lastName ? (
        <span className="error">{errors.lastName}</span>
      ) : null}

      <Input
        name="phone"
        id="phone"
        label="Phone Number"
        value={data.phone}
        placeholder="Ex: 111-111-111"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validatePhone);
          handleErrors({ ...errors, [name]: error });
        }}
        type="tel"
        fill="true"
        required
      />
      {errors.phone ? <span className="error">{errors.phone}</span> : null}

      <Input
        name="email"
        id="email"
        label="Email"
        value={data.email}
        placeholder="Ex: roger@email.com"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateEmail);
          handleErrors({ ...errors, [name]: error });
        }}
        type="email"
        fill="true"
        required
      />
      {errors.email ? <span className="error">{errors.email}</span> : null}
    </form>
  );
}
