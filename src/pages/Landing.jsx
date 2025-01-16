import logoFull from "../assets/logo-full-light.svg";
import Card from "../components/Card/Card";

export default function Landing() {
  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <img src={logoFull} alt="logo" />
      </header>
      <main>
        <div className="container">
          <Card>
            <p>
              Quick resume without the hassle. Enter your information into the
              CV-Generator and have a ready to download resume in minutes.
            </p>
            <button>Get Started</button>
          </Card>
        </div>
      </main>
    </>
  );
}
