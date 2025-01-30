import { useState } from "react";
import logoLess from "../assets/logo-less-light.svg";
import Card from "../components/Card/Card";
import EdForm from "../components/Forms/EdForm";
import ExForm from "../components/Forms/ExForm";
import BasicForm from "../components/Forms/BasicForm";
import Button from "../components/Button/Button";

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
    let targetIndex = education.findIndex((entry) => entry.id === id);
    setEducation([
      ...education.slice(0, targetIndex),
      data,
      ...education.slice(targetIndex + 1),
    ]);
  };

  // handles update to an experience form and corresponding data entry
  const handleExChange = (id, data) => {
    let targetIndex = experience.findIndex((entry) => entry.id === id);
    setExperience([
      ...experience.slice(0, targetIndex),
      data,
      ...experience.slice(targetIndex + 1),
    ]);
  };

  // handles adding Add education entry
  const handleAddEd = () => {
    let nextId = education.length > 0 ? education.at(-1).id + 1 : 0;
    setEducation([...education, { ...edTemplate, id: nextId }]);
  };
  // handles adding Add experience entry
  const handleAddEx = () => {
    let nextId = experience.length > 0 ? experience.at(-1).id + 1 : 0;
    setExperience([...experience, { ...exTemplate, id: nextId }]);
  };

  // handles Delete Add education entry
  const handleDeleteEd = (id) => {
    let targetIndex = education.findIndex((entry) => entry.id === id);
    setEducation([
      ...education.slice(0, targetIndex),
      ...education.slice(targetIndex + 1),
    ]);
  };

  // handles removing Add experience entry
  const handleDeleteEx = (id) => {
    let targetIndex = experience.findIndex((entry) => entry.id === id);
    setExperience([
      ...experience.slice(0, targetIndex),
      ...experience.slice(targetIndex + 1),
    ]);
  };

  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
        <h1 className="title">Information</h1>
        <p className="body">Enter your information below then click submit</p>
      </header>
      <main>
        <section id="basic">
          <Card>
            <h2 className="heading">Basic Info</h2>
            <BasicForm data={basic} handleInputChange={handleBasicChange} />
          </Card>
        </section>
        <section id="education">
          <Card>
            <h2 className="heading">Education</h2>
            {education.map((entry, index) => (
              <EdForm
                data={entry}
                handleInputChange={handleEdChange}
                handleDelete={handleDeleteEd}
                key={"education" + entry.id}
              />
            ))}
            <Button onClick={handleAddEd}> Add Entry</Button>
          </Card>
        </section>

        <section id="experience">
          <Card>
            <h2 className="heading">Experience</h2>
            {experience.map((entry, index) => (
              <ExForm
                data={entry}
                handleInputChange={handleExChange}
                handleDelete={handleDeleteEx}
                key={"experience" + entry.id}
              />
            ))}
            <Button onClick={handleAddEx}> Add Entry</Button>
          </Card>
        </section>
        <div className="btn-group">
          <Button color="negative">Cancel</Button>
          <Button color="positive">Submit</Button>
        </div>
      </main>
    </>
  );
}
