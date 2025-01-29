let degreeTypes = [
  "Highschool/GED",
  "Associates",
  "Bachelor's",
  "Master's",
  "Doctoral",
];

export default function EdForm({ data, handleInputChange }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation
  const updateData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    handleInputChange(data.id, { ...data, [name]: value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="institution">Institution</label>
      <input
        name="institution"
        id="institution"
        value={data.institution}
        placeholder="Ex: Harvard"
        onChange={updateData}
        required
      />

      <label htmlFor="degreeType">Degree Type</label>
      <select name="degreeType" id="degreeType" onChange={updateData} required>
        <option>Degree Type</option>
        {degreeTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="major">Major</label>
      <input
        name="major"
        id="major"
        value={data.major}
        placeholder="Ex: Quantum Psychology"
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
        required
      />
      <button onClick={() => console.log(data)}>Check form data</button>
    </form>
  );
}
