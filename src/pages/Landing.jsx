import { useNavigate } from "react-router";
import logoFull from "../assets/logo-full-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

export default function Landing() {
  let navigate = useNavigate();
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
            <Button
              onClick={() => {
                localStorage.removeItem("data");
                navigate("/entry");
              }}
            >
              Get Started
            </Button>
          </Card>
        </div>
      </main>
    </>
  );
}
