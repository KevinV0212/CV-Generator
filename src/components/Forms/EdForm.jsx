import { useState } from "react";
import { validate, validateNonEmpty } from "../../validation/validation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./form.module.css";

let degreeTypes = [
  "Highschool/GED",
  "Associates",
  "Bachelor's",
  "Master's",
  "Doctoral",
];

export default function EdForm({
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
        name="institution"
        id="institution"
        label="Institution"
        value={data.institution}
        placeholder="Ex: Harvard"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.institution != "" ? (
        <span className="error">{errors.institution}</span>
      ) : null}
      <Select
        name="degreeType"
        id="degreeType"
        label="Degree Type"
        value={data.degreeType}
        onChange={updateData}
        fill="true"
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        required
      >
        <option></option>
        {degreeTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </Select>
      {errors.degreeType ? (
        <span className="error">{errors.degreeType}</span>
      ) : null}

      <Input
        name="major"
        id="major"
        label="Major"
        value={data.major}
        placeholder="Ex: Quantum Psychology"
        onChange={updateData}
        onBlur={(e) => {
          let { name, value } = e.target;
          let error = validate(value, validateNonEmpty);
          handleErrors(data.id, { ...errors, [name]: error });
        }}
        fill="true"
        required
      />
      {errors.major ? <span className="error">{errors.major}</span> : null}
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

      <Button color="negative" onClick={deleteData}>
        Delete
      </Button>
    </form>
  );
}
