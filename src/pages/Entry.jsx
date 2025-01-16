import { useState } from "react";
import logoLess from "../assets/logo-less-light.svg";
import Card from "../components/Card/Card";

export default function Entry() {
  const education = useState({});
  const experience = useState({});

  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
        <h1>Information</h1>
        <p>Enter your information below then click submit</p>
      </header>
      <main>
        <section id="education">
          <Card>
            <h2>Education</h2>
            {/* forms */}
          </Card>
        </section>

        <section id="experience">
          <Card>
            <h2>Experience</h2>
            {/* forms */}
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
