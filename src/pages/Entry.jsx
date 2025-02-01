import { useEffect, useState } from "react";
import logoLess from "../assets/logo-less-light.svg";
import Card from "../components/Card/Card";
import EdForm from "../components/Forms/EdForm";
import ExForm from "../components/Forms/ExForm";
import BasicForm from "../components/Forms/BasicForm";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router";
import { validateNonEmpty } from "../validation/validation";

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
  startDate: "",
  endDate: "",
};

// create template for experience data
const exTemplate = {
  id: 0,
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  description: "",
};

export default function Entry() {
  const [basic, setBasic] = useState({ ...basicTemplate });
  const [education, setEducation] = useState([{ ...edTemplate }]);
  const [experience, setExperience] = useState([{ ...exTemplate }]);

  const [basicErrors, setBasicErrors] = useState({ ...basicTemplate });
  const [edErrors, setEdErrors] = useState([{ ...edTemplate }]);
  const [exErrors, setExErrors] = useState([{ ...exTemplate }]);

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

  // handles updateing basic form errors
  const handleBasicErrors = (error) => {
    setBasicErrors({ ...error });
  };

  // handles updating education form errors
  const handleEdErrors = (id, error) => {
    let targetIndex = edErrors.findIndex((entry) => entry.id === id);
    setEdErrors([
      ...edErrors.slice(0, targetIndex),
      error,
      ...edErrors.slice(targetIndex + 1),
    ]);
  };

  // handles updating experience form errors
  const handleExErrors = (id, error) => {
    let targetIndex = exErrors.findIndex((entry) => entry.id === id);
    setExErrors([
      ...exErrors.slice(0, targetIndex),
      error,
      ...exErrors.slice(targetIndex + 1),
    ]);
  };

  // handles adding Add education entry
  const handleAddEd = () => {
    let nextId = education.length > 0 ? education.at(-1).id + 1 : 0;
    setEducation([...education, { ...edTemplate, id: nextId }]);
    setEdErrors([...edErrors, { ...edTemplate, id: nextId }]);
  };
  // handles adding Add experience entry
  const handleAddEx = () => {
    let nextId = experience.length > 0 ? experience.at(-1).id + 1 : 0;
    setExperience([...experience, { ...exTemplate, id: nextId }]);
    setExErrors([...exErrors, { ...exTemplate, id: nextId }]);
  };

  // handles deleting an education entry
  const handleDeleteEd = (id) => {
    let targetIndex = education.findIndex((entry) => entry.id === id);
    setEducation([
      ...education.slice(0, targetIndex),
      ...education.slice(targetIndex + 1),
    ]);
    setEdErrors([
      ...edErrors.slice(0, targetIndex),
      ...edErrors.slice(targetIndex + 1),
    ]);
  };

  // handles removing Add experience entry
  const handleDeleteEx = (id) => {
    let targetIndex = experience.findIndex((entry) => entry.id === id);
    setExperience([
      ...experience.slice(0, targetIndex),
      ...experience.slice(targetIndex + 1),
    ]);
    setExErrors([
      ...exErrors.slice(0, targetIndex),
      ...exErrors.slice(targetIndex + 1),
    ]);
  };

  let navigate = useNavigate();

  // returns true if any prop values are empty; returns false if not
  const containsError = (obj) => {
    for (let key in obj) {
      if (key !== "id" && obj[key] !== "") {
        return true;
      }
    }
    return false;
  };

  // checks and updates all fields for errors
  // returns true if no errors were found/added; returns false if errors exist
  const validate = () => {
    let basicTemp = { ...basicErrors };
    // flag basic data errors
    for (let key in basic) {
      if (key != "id") {
        basicTemp[key] = basicTemp[key] || validateNonEmpty(basic[key]);
      }
    }
    setBasicErrors({ ...basicTemp });

    // flag education data errors
    let edTemp = [...edErrors];
    for (let i = 0; i < education.length; i++) {
      let entry = education[i];
      let entryErrors = edTemp[i];
      for (let key in entry) {
        if (key != "id") {
          entryErrors[key] = entryErrors[key] || validateNonEmpty(entry[key]);
        }
      }
    }
    setEdErrors([...edTemp]);

    // flag experience data errors
    let exTemp = [...exErrors];
    for (let i = 0; i < experience.length; i++) {
      let entry = experience[i];
      let entryErrors = exTemp[i];
      for (let key in entry) {
        if (key != "id") {
          entryErrors[key] = entryErrors[key] || validateNonEmpty(entry[key]);
        }
      }
    }
    setExErrors([...exTemp]);

    // check if any field is missing information; alert user
    if (containsError(basicErrors)) {
      return false;
    }
    for (let entry of edErrors) {
      if (containsError(entry)) {
        return false;
      }
    }
    for (let entry of exErrors) {
      if (containsError(entry)) {
        return false;
      }
    }
    return true;
  };

  // handles saving data to local storage
  const handleSubmit = () => {
    console.log(education);
    console.log(edErrors);
    if (!validate()) {
      alert("Please fix all errors before submitting.");
    } else {
      let data = { basic, experience, education };
      localStorage.setItem("data", JSON.stringify(data));
      navigate("/end");
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setBasic(data.basic);
      setEducation(data.education);
      setExperience(data.experience);
    }
  }, []);
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
            <BasicForm
              data={basic}
              handleInputChange={handleBasicChange}
              errors={basicErrors}
              handleErrors={handleBasicErrors}
            />
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
                errors={edErrors[index]}
                handleErrors={handleEdErrors}
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
                errors={exErrors[index]}
                handleErrors={handleExErrors}
                key={"experience" + entry.id}
              />
            ))}
            <Button onClick={handleAddEx}> Add Entry</Button>
          </Card>
        </section>
        <div className="btn-group">
          <Button color="negative" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button color="positive" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </main>
    </>
  );
}
