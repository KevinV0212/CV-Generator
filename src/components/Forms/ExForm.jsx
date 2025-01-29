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
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="company">Company</label>
      <input
        name="company"
        id="company"
        value={data.company}
        placeholder="Ex: ACME"
        onChange={updateData}
        required
      />

      <label htmlFor="position">Position/Role</label>
      <input
        name="position"
        id="position"
        value={data.position}
        placeholder="Ex: Head Trap Technician"
        onChange={updateData}
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        name="startDate"
        id="startDate"
        value={data.startDate}
        onChange={updateData}
        type="date"
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        name="endDate"
        id="endDate"
        value={data.endDate}
        onChange={updateData}
        type="date"
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={data.description}
        onChange={updateData}
        placeholder="Ex: I did...during my time at..."
        required
      />
      <button onClick={deleteData}>Delete</button>

      <button onClick={() => console.log(data)}>Check form data</button>
    </form>
  );
}
