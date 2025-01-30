import logoLess from "../assets/logo-less-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

export default function End() {
  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
      </header>
      <main>
        <Card>
          <h1 className="heading">Thank you for using CV Generator</h1>
          <Button>Preview</Button>
          <Button>Edit Form</Button>
          <Button>Download as PDF</Button>
          <Button>New Resume</Button>
        </Card>
      </main>
    </>
  );
}
