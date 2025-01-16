import logoLess from "../assets/logo-less-light.svg";
import Card from "../components/Card/Card";

export default function End() {
  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
      </header>
      <main>
        <Card>
          <h1>Thank you for using CV Generator</h1>
          <button>Preview</button>
          <button>Edit Form</button>
          <button>Download as PDF</button>
          <button>New Resume</button>
        </Card>
      </main>
    </>
  );
}
