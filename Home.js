import React from "react";
import { AppBar, Toolbar, Typography, Box, TextField, Button, Avatar, Container, InputAdornment, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const categories = [
  { label: "Person", count: 126742, color: "#add8e6" },
  { label: "Organization", count: 67862, color: "#90ee90" },
  { label: "Legal Entity", count: 2738, color: "#98fb98" },
  { label: "System", count: 28353, color: "#dda0dd" },
  { label: "Vendor", count: 11523, color: "#d8bfd8" },
  { label: "Repository", count: 165384, color: "#90ee90" },
  { label: "Record Series", count: 68, color: "#d3d3d3" },
  { label: "Location", count: 89846, color: "#ffdead" },
  { label: "Taxonomy", count: 1548, color: "#ffeb99" },
  { label: "Business Concept", count: 208591, color: "#ffd700" },
  { label: "Firmwide Data Catalog", count: 17947, color: "#d3d3d3" },
];

const SearchPage = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <AppBar position="fixed" sx={{ bgcolor: "white", color: "black", padding: 1, width: "100%", top: 0, left: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold", position: "absolute", left: 16, display: "flex", alignItems: "center" }}>
            <span style={{ color: "black" }}>Morgan Stanley</span>
            <span style={{ margin: "0 10px", borderLeft: "2px solid black", height: "20px" }}></span>
            <span style={{ color: "#1e88e5" }}>NFRT Metadata Platform</span>
          </Typography>
          <Avatar alt="User" src="https://via.placeholder.com/40" sx={{ marginLeft: "auto" }} />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          What would you like to discover?
        </Typography>

        <TextField
          fullWidth
          placeholder="Type a name, or concept such as 'Data Analytics' or phrase"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
            sx: { borderRadius: "70px", padding: "10px" },
          }}
          sx={{ mt: 2, mb: 3, bgcolor: "white", borderRadius: "25px", overflow: "hidden" }}
        />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
          {categories.map((category) => (
            <Tooltip key={category.label} title={`Explore ${category.label}`} arrow>
              <Button
                variant="contained"
                sx={{ bgcolor: category.color, fontWeight: "bold", color: "black" }}
              >
                {`${category.label} (${category.count})`}
              </Button>
            </Tooltip>
          ))}
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 3 }}>
        A Central Hub for metadata providing data accessibility and visibility. This NFRT system dictionary provides an easy to use interface to display system metadata including platforms, databases, schema, tables, columns, views, APIs, ETL jobs, named graphs and more. The portal provides a single view of the system metadata Including how data is generated, transformed, consumed, presented, and owned.
        </Typography>
      </Container>
    </Box>
  );
};

export default SearchPage;
