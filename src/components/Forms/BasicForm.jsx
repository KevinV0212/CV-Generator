export default function BasicForm({ data, handleInputChange }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation

  // for each input, call handle input to record the data in form data
  // ... then update the data entry using on change passed to the form
  const updateData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    handleInputChange({ ...data, [name]: value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        value={data.firstName}
        placeholder="Ex: Roger"
        onChange={updateData}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        value={data.lastName}
        placeholder="Ex: Federer"
        onChange={updateData}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        name="phone"
        id="phone"
        value={data.phone}
        placeholder="Ex: 111-111-111"
        onChange={updateData}
        type="tel"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        value={data.email}
        placeholder="Ex: roger@email.com"
        onChange={updateData}
        type="email"
        required
      />
      <button onClick={() => console.log(data)}>Check form data</button>
    </form>
  );
}
