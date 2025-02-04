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
