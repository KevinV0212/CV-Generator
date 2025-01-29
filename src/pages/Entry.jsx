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
  id: 0,
  institution: "",
  degreeType: "",
  major: "",
  startDate: new Date(),
  endDate: new Date(),
};

// create template for experience data
const exTemplate = {
  id: 0,
  company: "",
  position: "",
  startDate: new Date(),
  endDate: new Date(),
  description: "",
};

// on button add entry button, create Add version  of education with an extra (empty) data entry
// then redner the forms based on the existing entries in experience and education
export default function Entry() {
  const [basic, setBasic] = useState(basicTemplate);
  const [education, setEducation] = useState([edTemplate]);
  const [experience, setExperience] = useState([exTemplate]);

  // handles updates to basic form
  const handleBasicChange = (data) => {
    setBasic({ ...data });
  };

  // handles update to   an educationform and corresponding data entry
  const handleEdChange = (id, data) => {
    setEducation([...education.slice(0, id), data, ...education.slice(id + 1)]);
  };

  // handles update to an experience form and corresponding data entry
  const handleExChange = (id, data) => {
    setExperience([
      ...experience.slice(0, id),
      data,
      ...experience.slice(id + 1),
    ]);
  };

  // handles adding Add education entry
  const handleAddEd = () => {
    let nextId = education.at(-1).id + 1;
    setEducation([...education, { ...edTemplate, id: nextId }]);
  };
  // handles adding Add experience entry
  const handleAddEx = () => {
    let nextId = experience.at(-1).id + 1;
    setExperience([...experience, { ...exTemplate, id: nextId }]);
  };

  // handles removing Add education entry
  const handleRemoveEd = () => {};

  // handles removing Add experience entry
  const handleRemoveEx = () => {};

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
            <BasicForm data={basic} handleInputChange={handleBasicChange} />
          </Card>
        </section>
        <section id="education">
          <Card>
            <h2>Education</h2>
            {education.map((entry, index) => (
              <EdForm
                data={entry}
                handleInputChange={handleEdChange}
                key={"education" + entry.id}
              />
            ))}
            <button onClick={handleAddEd}> Add Entry</button>
          </Card>
        </section>

        <section id="experience">
          <Card>
            <h2>Experience</h2>
            {experience.map((entry, index) => (
              <ExForm
                data={entry}
                handleInputChange={handleExChange}
                key={"experience" + entry.id}
              />
            ))}
            <button onClick={handleAddEx}> Add Entry</button>
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
