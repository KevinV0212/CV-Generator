export default function BasicForm({ onChange, children }) {
  // form should somehow be correlated with some index of the use state variable it's data is inside of
  // when an input field changes, it will search he matching element in the state data varaible and then update that index
  // two layers of diving
  // there should be something similar to this in geosync I think for validation
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        required
        name="firstName"
        id="firstName"
        placeholder="Ex: Roger"
      ></input>

      <label htmlFor="lastName">Last Name</label>
      <input
        required
        name="lastName"
        id="lastName"
        placeholder="Ex: Federer"
      ></input>

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        required
        name="phone"
        id="phone"
        placeholder="Ex: 111-111-111"
      ></input>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        required
        name="email"
        id="email"
        placeholder="Ex: roger@email.com"
      ></input>
    </form>
  );
}
