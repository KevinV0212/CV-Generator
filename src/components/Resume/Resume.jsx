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
            <Text style={styles.title}>
              {basic.firstName + " " + basic.lastName}
            </Text>
            <View>
              <Text
                style={styles.body}
              >{`${basic.phone} | ${basic.email}`}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            {education.map((entry, index) => (
              <View
                key={"education" + entry.id}
                style={index < education.length - 1 ? styles.entry : null}
              >
                <Text
                  style={styles.bold}
                >{`${entry.degreeType} in ${entry.major}`}</Text>
                <View style={styles.flexSpaceBetween}>
                  <Text style={styles.body}>{entry.institution}</Text>
                  <Text style={styles.body}>{`${getFormattedDate(
                    entry.startDate
                  )} - ${getFormattedDate(entry.endDate)} `}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Experience</Text>
            {experience.map((entry, index) => (
              <View
                key={"education" + entry.id}
                style={index < experience.length - 1 ? styles.entry : null}
              >
                <View style={styles.flexSpaceBetween}>
                  <Text style={styles.bold}>{entry.company}</Text>
                  <Text style={styles.bold}>{`${getFormattedDate(
                    entry.startDate
                  )} - ${getFormattedDate(entry.endDate)} `}</Text>
                </View>
                <Text style={styles.body}>{entry.position}</Text>
                <Text style={styles.body}>{entry.description}</Text>
              </View>
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
