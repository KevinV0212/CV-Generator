import { useState } from "react";
import Input from "../Input/Input";

export default function BasicForm({ data, handleInputChange }) {
  const [errors, setErrors] = useState({});

  const validate = (fieldData = data) => {};

  const updateData = (e) => {
    e.target.setCustomValidity("error msg:  Please enter your first name");

    e.preventDefault();
    const { name, value } = e.target;
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
        onInvalid={(e) => {}}
        fill="true"
        required
      />

      <Input
        name="lastName"
        id="lastName"
        label="LastName"
        value={data.lastName}
        placeholder="Ex: Federer"
        onChange={updateData}
        fill="true"
        required
      />

      <Input
        name="phone"
        id="phone"
        label="Phone Number"
        value={data.phone}
        placeholder="Ex: 111-111-111"
        onChange={updateData}
        type="tel"
        fill="true"
        required
      />

      <Input
        name="email"
        id="email"
        label="Email"
        value={data.email}
        placeholder="Ex: roger@email.com"
        onChange={updateData}
        type="email"
        fill="true"
        required
      />
    </form>
  );
}
