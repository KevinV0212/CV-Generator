import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import styles from "./form.module.css";
export default function ExForm({ data, handleInputChange, handleDelete }) {
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
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.entry}>
      <Input
        name="company"
        id="company"
        label="Company"
        value={data.company}
        placeholder="Ex: ACME"
        onChange={updateData}
        fill="true"
        required
      />
      <Input
        name="position"
        id="position"
        label="Position/Role"
        value={data.position}
        placeholder="Ex: Head Trap Technician"
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
      />
      <Textarea
        name="description"
        id="description"
        label="Description"
        value={data.description}
        onChange={updateData}
        placeholder="Ex: I did...during my time at..."
        fill="true"
        required
      />
      <Button color="negative" onClick={deleteData}>
        Delete
      </Button>
    </form>
  );
}
