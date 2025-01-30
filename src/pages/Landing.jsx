import logoFull from "../assets/logo-full-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

export default function Landing() {
  return (
    <>
      <header>
        <h1 className="title">CV Generator</h1>
        <img src={logoFull} alt="logo" />
      </header>
      <main>
        <div className="container">
          <Card>
            <p className="body">
              Quick resume without the hassle. Enter your information into the
              CV-Generator and have a ready to download resume in minutes.
            </p>
            <Button>Get Started</Button>
          </Card>
        </div>
      </main>
    </>
  );
}
