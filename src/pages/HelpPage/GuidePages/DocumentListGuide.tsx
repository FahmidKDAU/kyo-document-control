import React from "react";
import { Box, Typography, Paper, Divider, Card } from "@mui/material";
import { ListAlt } from "@mui/icons-material";

export default function DocumentListGuide() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <ListAlt sx={{ fontSize: "2rem", color: "#6e3cbe" }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#212121" }}>
          Document List Guide
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 4, color: "#666", fontSize: "1rem" }}>
        Learn how to navigate and use the document list to find what you need quickly and efficiently.
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
          Step 1: Accessing the Document List
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Navigate to the "All Documents" section from the sidebar or dashboard. Here you'll see a comprehensive list of all available documents.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/document-list/step1.png"
          alt="Main document list view"
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
          Step 2: Understanding the Table Columns
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          The document table displays key information including document name, type (Policy, Procedure, Form), categories, functions, and release date. Each column can be used to sort the documents.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/document-list/step2.png"
          alt="Table columns with highlighted labels"
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
          Step 3: Opening Documents
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Click anywhere on a document row to open the full document view. This will take you to the Content View Page where you can read the document in detail, download it, or access additional information about the document.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/document-list/step3.png"
          alt="Clicking on a document row"
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
          Step 4: Quick Preview with Open in New Tab
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Each document row has an "Open in New Tab" button (external link icon) on the right side. Click this button to view the complete PDF document in a new browser tab without leaving the document list. This is useful for quickly previewing documents or comparing multiple documents side by side.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/document-list/step4.png"
          alt="Open in New Tab button on document row"
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
