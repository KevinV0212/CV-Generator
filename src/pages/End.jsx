import { useNavigate } from "react-router";
import logoLess from "../assets/logo-less-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Resume from "../components/Resume/Resume";

export default function End() {
  const [viewerOpen, setViewerOpen] = useState(false);
  let data = JSON.parse(localStorage.getItem("data"));
  let navigate = useNavigate();

  let handleNewResume = () => {
    let check = window.confirm("This will delete your current resume.");
    if (check) {
      localStorage.removeItem("data");
      navigate("/entry");
    }
  };
  return (
    <>
      <header>
        <img src={logoLess} alt="logo" />
      </header>
      <main>
        <Card>
          <h1 className="heading">Thank you for using CV Generator</h1>

          <Button onClick={() => navigate("/entry")}>Edit Form</Button>

          <Button onClick={handleNewResume}>New Resume</Button>

          <Button onClick={() => setViewerOpen(!viewerOpen)}>
            {viewerOpen ? "Close Preview" : "Download PDF"}
          </Button>

          {viewerOpen ? (
            <div className="iframe-wrapper">
              <PDFViewer height="500px" width="100%">
                <Resume data={data} />
              </PDFViewer>
            </div>
          ) : null}
        </Card>
      </main>
    </>
  );
}
