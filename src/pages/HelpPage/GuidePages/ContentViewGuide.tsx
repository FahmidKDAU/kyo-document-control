import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Visibility } from "@mui/icons-material";

export default function ContentViewGuide() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Visibility sx={{ fontSize: "2rem", color: "#6e3cbe" }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#212121" }}>
          Content View Page Guide
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 4, color: "#666", fontSize: "1rem" }}>
        Learn how to use the document viewer to read, download, and interact with documents effectively.
      </Typography>

      {/* Step 1 (Removed) */}

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
          Step 1: Viewing Document Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          The left sidebar displays important document metadata including the document type, categories, associated functions, and release date. Use the breadcrumbs at the top to navigate back to previous pages.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step2.png"
          alt="Sidebar with document information section"
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
          Step 2: Using Navigation Buttons
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Use the "Back to Search" button (if you came from a search) to return to your filtered results, or use "Back to Documents" to return to the main document list. Your search state is preserved when using these buttons.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step3.png"
          alt="Navigation buttons in sidebar"
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
          Step 3: Reading the PDF
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          The PDF viewer on the right allows you to scroll through the document, zoom in/out, and read the content directly in your browser. The viewer supports all standard PDF navigation features.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step4.png"
          alt="PDF viewer with document displayed"
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
          Step 4: Using Quick Actions
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          The floating action bar at the bottom of the PDF viewer provides quick access to common actions: Download the document, Open in a new tab, or Hide the action bar. Click the show button in the bottom-right corner to bring back the action bar if hidden.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step5.png"
          alt="Floating action bar at bottom"
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
          Step 5: Downloading Documents
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Click the "Download" button in the floating action bar to save a copy of the document to your computer. The document will be downloaded in its original format or as a PDF depending on the document settings.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step6.png"
          alt="Download button highlighted in action bar"
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
          Step 6: Opening in New Tab
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
          Use the "Open in New Tab" button to view the document in a separate browser tab. This is useful when you need to reference multiple documents simultaneously or want to use your browser's PDF tools.
        </Typography>
        
        {/* Screenshot */}
        <img
          src="/screenshots/content-view/step7.png"
          alt="Open in new tab button"
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
