import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 72,
  },
  section: {
    padding: "20px 0px",
    borderBottom: "2px solid black",
  },
});

// Create Document Component
export default function Resume({ data }) {
  if (data) {
    const { basic, education, experience } = data;
    return (
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View style={styles.section}>
            <Text>{basic.firstName + " " + basic.lastName}</Text>
            <div>
              <Text>{basic.phone}</Text>
              <Text>{basic.email}</Text>
            </div>
          </View>

          <View style={styles.section}>
            <Text>
              <Text>Education</Text>
            </Text>
            {education.map((entry) => (
              <div key={"education" + entry.id}>
                <Text>{`${entry.degreeType} in ${entry.major}`}</Text>
                <div>
                  <Text>{entry.institution}</Text>
                  <div>
                    <Text>{entry.startDate}</Text>
                    <Text>{entry.endDate}</Text>
                  </div>
                </div>
              </div>
            ))}
          </View>

          <View style={styles.section}>
            <Text>
              <Text>Experience</Text>
            </Text>
            {experience.map((entry) => (
              <div key={"education" + entry.id}>
                <div>
                  <Text>{entry.company}</Text>
                  <div>
                    <Text>{entry.startDate}</Text>
                    <Text>{entry.endDate}</Text>
                  </div>
                </div>
                <Text>{entry.position}</Text>
                <Text>{entry.description}</Text>
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
