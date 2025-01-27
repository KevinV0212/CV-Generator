export default function ExForm({ onChange, children }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation
  return (
    <form>
      <label htmlFor="">Company</label>
      <input name="company" id="company" placeholder="Ex: ACME"></input>

      <label htmlFor="position">Position/Role</label>
      <input
        name="position"
        id="position"
        placeholder="Ex: Head Trap Technician"
      ></input>

      <label htmlFor="startDate">Start Date</label>
      <input type="date" name="startDate" id="startDate"></input>

      <label htmlFor="endDate">End Date</label>
      <input type="date" name="endDate" id="endDate"></input>

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Ex: I did...during my time at..."
      ></textarea>
    </form>
  );
}
