import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 72,
  },
  header: {
    textAlign: "center",
    padding: "20px 0px",
    borderBottom: "2px solid black",
  },
  section: {
    textAlign: "left",
    padding: "20px 0px",
    borderBottom: "2px solid black",
  },
  title: {},
  heading: {},
  subheading: {},
  body: {},
  flexSpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    margin: "10px 0px",
  },
});
