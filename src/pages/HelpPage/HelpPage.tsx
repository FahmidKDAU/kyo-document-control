import React, { useState } from "react";
import { Box, Paper, Tabs, Tab, useTheme } from "@mui/material";
import { Help, ListAlt, FilterList, Visibility, Info } from "@mui/icons-material";
import HelpContent from "../../components/HelpContent/HelpContent";
import DocumentListGuide from "./GuidePages/DocumentListGuide";
import FilteringGuide from "./GuidePages/FilteringGuide";
import ContentViewGuide from "./GuidePages/ContentViewGuide";

function HelpPage() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", p: 2 }}>
      {/* Tab Navigation */}
      <Paper
        elevation={0}
        sx={{
          mb: 3,
          borderRadius: "16px",
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            backgroundColor: "#fafafa",
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              py: 2,
              color: "#666",
              "&.Mui-selected": {
                color: theme.palette.kyoPurple?.main || "#6e3cbe",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.kyoPurple?.main || "#6e3cbe",
              height: "3px",
            },
          }}
        >
          <Tab icon={<Info />} iconPosition="start" label="Overview" />
          <Tab icon={<ListAlt />} iconPosition="start" label="Document List" />
          <Tab icon={<FilterList />} iconPosition="start" label="Filtering" />
          <Tab icon={<Visibility />} iconPosition="start" label="Content View" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "16px",
          border: "1px solid #e0e0e0",
          backgroundColor: "white",
          boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
          minHeight: "600px",
        }}
      >
        {activeTab === 0 && <HelpContent />}
        {activeTab === 1 && <DocumentListGuide />}
        {activeTab === 2 && <FilteringGuide />}
        {activeTab === 3 && <ContentViewGuide />}
      </Paper>
    </Box>
  );
}

export default HelpPage;
