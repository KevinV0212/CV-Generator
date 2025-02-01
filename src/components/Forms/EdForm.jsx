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

export default function EdForm({ data, handleInputChange, handleDelete }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation
  const updateData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    handleInputChange(data.id, { ...data, [name]: value });
  };

  const deleteData = (e) => {
    e.preventDefault();
    handleDelete(data.id);
  };

  const getFormattedDate = (date) => {
    // if (!date) return "";
    // console.log(date);
    // return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
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
        fill="true"
        required
      />

      <Select
        name="degreeType"
        id="degreeType"
        label="Degree Type"
        value={data.degreeTypes}
        onChange={updateData}
        fill="true"
        required
      >
        <option>Degree Type</option>
        {degreeTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </Select>

      <Input
        name="major"
        id="major"
        label="Major"
        value={data.major}
        placeholder="Ex: Quantum Psychology"
        onChange={updateData}
        fill="true"
        required
      />
      <Input
        name="startDate"
        id="startDate"
        label="Start Date"
        value={data.startDate}
        onChange={updateData}
        type="date"
        required
      />
      <Input
        name="endDate"
        id="endDate"
        label="End Date"
        value={data.endDate}
        onChange={updateData}
        type="date"
        required
      />
      <Button color="negative" onClick={deleteData}>
        Delete
      </Button>
    </form>
  );
}
