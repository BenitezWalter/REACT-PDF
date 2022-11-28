import { Button } from "react-bootstrap";
import { useState } from "react";
import { HistoriaClinica } from "./HistoriaClinica";
import React from "react";
import PdfDoc from "../PdfDoc";
import { PDFViewer } from "@react-pdf/renderer";

function PrincipalHistoria() {
  const [verHistoria, setVerHistoria] = useState(false);
  const [verPdf, setPdf] = useState(false);

  return (
    <>
      <nav>
        <div className="container d-flex justify-content-center">
          <Button
            onClick={() => {
              setVerHistoria(!verHistoria);
              setPdf(false);
            }}
          >
            {verHistoria ? "Ocultar Historia" : "Ver Historia"}
          </Button>

          <Button
            onClick={() => {
              setVerHistoria(false);
              setPdf(!verPdf);
            }}
          >
            {verPdf ? "Ocultar PDF" : "Visualizar PDF"}
          </Button>
        </div>
      </nav>

      {verHistoria ? <HistoriaClinica /> : null}
      {verPdf ? (
        <div style={{ minHeight: "100vh" }}>
          <PDFViewer style={{width:"100%", height:"90vh"}}>
            <PdfDoc />
          </PDFViewer>
        </div>
      ) : null}
    </>
  );
}

export default PrincipalHistoria;
