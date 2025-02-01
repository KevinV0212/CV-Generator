import { useNavigate } from "react-router";
import logoLess from "../assets/logo-less-light.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/Document/Document";
import { useState } from "react";

export default function End() {
  let navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = useState(false);

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
                <MyDocument />
              </PDFViewer>
            </div>
          ) : null}
        </Card>
      </main>
    </>
  );
}
