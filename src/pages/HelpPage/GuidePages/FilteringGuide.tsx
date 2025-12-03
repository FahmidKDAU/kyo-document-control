import React from "react";
import { Box, Typography, Paper, Card } from "@mui/material";
import { FilterList } from "@mui/icons-material";

export default function FilteringGuide() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <FilterList sx={{ fontSize: "2rem", color: "#6e3cbe" }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#212121" }}>
          Filtering Documents Guide
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 4, color: "#666", fontSize: "1rem" }}>
        Master the filtering system to quickly find specific documents based on categories, functions, and search terms.
      </Typography>

      {/* Step 1 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 1: Using the Search Bar
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Type keywords into the search bar to find documents by name. The search updates in real-time as you type, showing matching results instantly.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step1.png"
          alt="Search bar with example search term"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 2 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 2: Filtering by Categories
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Click on the "Categories" dropdown to select one or multiple categories. Documents are filtered to show only those matching your selected categories. You can select multiple categories at once.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step2.png"
          alt="Categories dropdown open with selections"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 3 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 3: Filtering by Functions
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Use the "Functions" dropdown to filter documents by their associated business functions. Like categories, you can select multiple functions to narrow down your results.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step3.png"
          alt="Functions dropdown with options"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 4 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 4: Combining Filters
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Combine search terms with category and function filters for precise results. All filters work together to help you find exactly what you need. Active filters are displayed as chips below the filter controls.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step4.png"
          alt="Multiple filters active with filter chips shown"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 5 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 5: Clearing Filters
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Remove individual filters by clicking the "X" on filter chips, or clear all filters at once using the "Clear All" button. This will reset the document list to show all available documents.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step5.png"
          alt="Clear filters button and chip X buttons"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 6 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 6: Search by Document Content
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          The search bar can find documents not only by their name, but also by keywords within their content. Type any relevant term or phrase, and the system will return documents that match those keywords, making it easier to find specific information across your entire document repository.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step6.png"
          alt="Search results for content keyword search"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>

      {/* Step 7 */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#212121" }}>
          Step 7: Preserving Search State with Back to Search
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          When you open a document from a search or filtered list, the "Back to Search" button will appear at the top of the sidebar. Clicking this button takes you back to the exact same filtered view you were looking at, preserving all your active filters, search terms, and the page you were on. This makes it easy to browse through search results and return to your filtered list after viewing individual documents.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          If you want to reset your search and start fresh, click the "Back to Documents" button instead. This will take you back to the main document list with all filters cleared.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/filtering/step7.png"
          alt="Back to Search button in Content View sidebar"
          style={{
            maxWidth: "1000px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Paper>
    </Box>
  );
}
