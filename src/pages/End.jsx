import { useNavigate } from "react-router";
import logoLess from "../assets/logo-less-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

export default function End() {
  let navigate = useNavigate();

  let handleNewResume = () => {
    // set locally saved form data to blank
    navigate("/entry");
  };
  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
      </header>
      <main>
        <Card>
          <h1 className="heading">Thank you for using CV Generator</h1>
          <Button>Preview</Button>
          <Button onClick={() => navigate("/entry")}>Edit Form</Button>
          <Button>Download as PDF</Button>
          <Button onClick={handleNewResume}>New Resume</Button>
        </Card>
      </main>
    </>
  );
}
