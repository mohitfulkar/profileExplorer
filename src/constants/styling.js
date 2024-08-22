export const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    padding: "16px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
  photo: {
    textAlign: "center",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "12px",
  },
  name: {
    fontSize: "1.5em",
    margin: "0.5em 0",
  },
  description: {
    fontSize: "1em",
    color: "#555",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    textAlign: "center",
  },
  detailsPhoto: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "16px",
  },
  detailsName: {
    fontSize: "2em",
    margin: "0.5em 0",
  },
  detailsDescription: {
    fontSize: "1.2em",
    color: "#555",
  },
  detailsContact: {
    fontSize: "1em",
    color: "#777",
  },
  detailsInterests: {
    fontSize: "1em",
    color: "#777",
  },
};
