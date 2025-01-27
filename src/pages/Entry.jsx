import { useState } from "react";
import logoLess from "../assets/logo-less-light.svg";
import Card from "../components/Card/Card";
import EdForm from "../components/Forms/EdForm";
import ExForm from "../components/Forms/ExForm";
import BasicForm from "../components/Forms/BasicForm";

// template for basic info
const basicTemplate = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};
// create template for education data
const edTemplate = {
  institution: "",
  degreeType: "",
  major: "",
  startDate: null,
  endDate: null,
};

// create template for experience data
const exTemplate = {
  institution: "",
  degreeType: "",
  major: "",
  startDate: null,
  endDate: null,
};
// on button add entry button, create new version  of education with an extra (empty) data entry
// then redner the forms based on the existing entries in experience and education
export default function Entry() {
  const [basic, setBasic] = useState({ ...basicTemplate });
  const [education, setEducation] = useState([{ ...edTemplate }]);
  const [experience, setExperience] = useState([{ ...exTemplate }]);

  // function that coordinates changes to form with it's associated entry in education/expedrience
  // each form can be numbered based on their index in each use state array
  // on change takes an object with all of the data values of a form
  // you will then pass this callback into each form component then call the passed down funciton on the inptu values of the form
  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
        <h1>Information</h1>
        <p>Enter your information below then click submit</p>
      </header>
      <main>
        <section id="basic">
          <Card>
            <h2>Basic Info</h2>
            <BasicForm />
            <button>Add Entry</button>
          </Card>
        </section>
        <section id="education">
          <Card>
            <h2>Education</h2>
            {education.map((entry, index) => (
              <EdForm data={entry} key={index} />
            ))}
            <button>Add Entry</button>
          </Card>
        </section>

        <section id="experience">
          <Card>
            <h2>Experience</h2>
            {experience.map((entry, index) => (
              <ExForm data={entry} key={index} />
            ))}
            <button>Add Entry</button>
          </Card>
        </section>
        <div className="">
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </main>
    </>
  );
}
