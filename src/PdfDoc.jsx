import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";


const PdfDoc = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <View>
            <Text>Historia Clinica</Text>
          </View>
          <View>
            <Text>DATOS GENERALES</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};



export default PdfDoc