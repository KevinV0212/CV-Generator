import { useState } from "react";
import { validate, validateNonEmpty } from "../../validation/validation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import styles from "./form.module.css";
export default function ExForm({
  data,
  handleInputChange,
  handleDelete,
  errors,
  handleErrors,
}) {
  const updateData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    handleErrors(data.id, { ...errors, [name]: "" });
    handleInputChange(data.id, { ...data, [name]: value });
  };

  const deleteData = (e) => {
    e.preventDefault();
    handleDelete(data.id);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.entry}>
      <Input
        name="company"
        id="company"
        label="Company"
        value={data.company}
        placeholder="Ex: ACME"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.company ? <span className="error">{errors.company}</span> : null}

      <Input
        name="position"
        id="position"
        label="Position/Role"
        value={data.position}
        placeholder="Ex: Head Trap Technician"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.position ? (
        <span className="error">{errors.position}</span>
      ) : null}

      <Input
        name="startDate"
        id="startDate"
        label="Start Date"
        value={data.startDate}
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        type="date"
        required
      />
      {errors.startDate ? (
        <span className="error">{errors.startDate}</span>
      ) : null}

      <Input
        name="endDate"
        id="endDate"
        label="End Date"
        value={data.endDate}
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          let startDate = new Date(data.startDate);
          let endDate = new Date(value);
          if (endDate < startDate) {
            error = "End date cannot be before start date.";
          }
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        type="date"
        required
      />
      {errors.endDate ? <span className="error">{errors.endDate}</span> : null}
      <Textarea
        name="description"
        id="description"
        label="Description"
        value={data.description}
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        placeholder="Ex: I did...during my time at..."
        fill="true"
        required
      />
      {errors.description ? (
        <span className="error">{errors.description}</span>
      ) : null}

      <Button color="negative" onClick={deleteData}>
        Delete
      </Button>
    </form>
  );
}
