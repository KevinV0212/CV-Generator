import { StyleSheet, Font } from "@react-pdf/renderer";
import DMSans from "../../assets/DMSans.ttf";
import DMSansBold from "../../assets/DMSansBold.ttf";
Font.register({
  family: "DM Sans",
  fonts: [{ src: DMSans }, { src: DMSansBold, fontWeight: "bold" }],
});
export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 72,
    fontFamily: "DM Sans",
  },
  header: {
    textAlign: "center",
    padding: "5px 0px",
    borderBottom: "2px solid black",
  },
  section: {
    textAlign: "left",
    padding: "5px 0px",
    borderBottom: "2px solid black",
  },
  entry: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  heading: { fontSize: 16, fontWeight: "bold" },
  bold: { fontSize: 12, fontWeight: "bold" },
  body: { fontSize: 12 },
  flexSpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// converts a date string to the following format: "MONTH YEAR"
export const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
};
