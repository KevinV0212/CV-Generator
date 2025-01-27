let degreeTypes = [
  "Highschool/GED",
  "Associates",
  "Bachelor's",
  "Master's",
  "Doctoral",
];

export default function EdForm({ onChange }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation
  return (
    <form>
      <label htmlFor="institution">Institution</label>
      <input
        name="institution"
        id="institution"
        placeholder="Ex: Harvard"
      ></input>

      <label htmlFor="degreeType">Degree Type</label>
      <select name="degreeType" id="degreeType">
        <option>Degree Type</option>
        {degreeTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="">Major</label>
      <input
        name="major"
        id="major"
        placeholder="Ex: Quantum Psychology"
      ></input>

      <label htmlFor="startDate">Start Date</label>
      <input type="date" name="startDate" id="startDate"></input>

      <label htmlFor="endDate">End Date</label>
      <input type="date" name="endDate" id="endDate"></input>
    </form>
  );
}
