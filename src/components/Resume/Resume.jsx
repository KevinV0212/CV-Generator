import { Document, Page, Text, View } from "@react-pdf/renderer";
import { getFormattedDate, styles } from "./styles.js";
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     margin: 72,
//   },
//   section: {
//     padding: "20px 0px",
//     borderBottom: "2px solid black",
//   },
// });

// Create Document Component
export default function Resume({ data }) {
  if (data) {
    const { basic, education, experience } = data;
    return (
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View style={styles.header}>
            <Text>{basic.firstName + " " + basic.lastName}</Text>
            <div>
              <Text>{`${basic.phone} | ${basic.email}`}</Text>
              <Text></Text>
            </div>
          </View>

          <View style={styles.section}>
            <Text>
              <Text>Education</Text>
            </Text>
            {education.map((entry) => (
              <div key={"education" + entry.id}>
                <Text>{`${entry.degreeType} in ${entry.major}`}</Text>
                <View style={styles.flexSpaceBetween}>
                  <Text>{entry.institution}</Text>
                  <Text>{`${getFormattedDate(
                    entry.startDate
                  )} - ${getFormattedDate(entry.endDate)} `}</Text>
                </View>
              </div>
            ))}
          </View>

          <View style={styles.section}>
            <Text>
              <Text>Experience</Text>
            </Text>
            {experience.map((entry) => (
              <div key={"education" + entry.id}>
                <View style={styles.flexSpaceBetween}>
                  <Text>{entry.company}</Text>
                  <Text>{`${getFormattedDate(
                    entry.startDate
                  )} - ${getFormattedDate(entry.endDate)} `}</Text>
                </View>
                <Text>{entry.position}</Text>
                <Text style={styles.description}>{entry.description}</Text>
              </div>
            ))}
          </View>
        </Page>
      </Document>
    );
  } else {
    return (
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View style={styles.section}>
            <Text>"Please go back and enter information";</Text>
          </View>
        </Page>
      </Document>
    );
  }
}
