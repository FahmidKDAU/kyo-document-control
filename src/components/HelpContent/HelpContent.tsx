import * as React from "react";
import {
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import {
  ExpandMore,
  Home,
  FolderOpen,
  Policy,
  Article,
  Search,
  PictureAsPdf,
  Download,
  FilterAlt,
  Email,
  Help,
  NavigateNext,
  Visibility,
  FindInPage,
  NewReleases,
  CheckCircle,
  OpenInNew,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

export default function HelpContent() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("navigation");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.kyoPurple.main || "#6e3cbe"} 0%, ${theme.palette.kyoPurple.main || "#6e3cbe"}E6 100%)`,
          borderRadius: "16px",
          padding: "40px",
          marginBottom: "24px",
          border: `1px solid ${theme.palette.kyoPurple.main || "#6e3cbe"}`,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Help
              sx={{
                fontSize: "3.5rem",
                color: "white",
                background: "rgba(255, 255, 255, 0.2)",
                padding: "12px",
                borderRadius: "50%",
                backdropFilter: "blur(10px)",
              }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Help Center
          </Typography>
          <Chip
            label="Version 1.2"
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: theme.palette.kyoPurple.main || "#6e3cbe",
              fontWeight: 700,
              fontSize: "0.75rem",
              height: "26px",
              mb: 1.5,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: "1rem",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Everything you need to know about navigating and using Kyocera's
            Document Repository
          </Typography>
        </Box>

        {/* Quick Stats */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<FolderOpen sx={{ color: "white !important" }} />}
            label="All Documents"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.35)",
              },
            }}
          />
          <Chip
            icon={<Policy sx={{ color: "white !important" }} />}
            label="Smart Filtering"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.35)",
              },
            }}
          />
          <Chip
            icon={<Search sx={{ color: "white !important" }} />}
            label="Advanced Search"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.35)",
              },
            }}
          />
        </Box>
      </Paper>

      {/* What's New Section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "24px",
          background: "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)",
          border: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <NewReleases sx={{ fontSize: "2rem", color: theme.palette.kyoPurple.main || "#6e3cbe" }} />
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#212121" }}>
            What's New in Version 1.2
          </Typography>
        </Box>
        
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Content View Page UI Redesign
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Modern card-based sidebar layout with improved document information display and better visual hierarchy
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Floating Action Bar
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Quick actions (Download, Open in Tab, Hide) now accessible via floating bar over PDF
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Help Content Page UI Redesign
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Professional redesign with version tracking, modern accordions, and comprehensive patch notes
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Skeleton Loading
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Improved loading states with skeleton screens for smoother user experience
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Search State Preservation
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Search and filter states are now preserved when navigating between pages
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ p: 2, backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
              <CheckCircle sx={{ color: "#43a047", fontSize: "1.2rem", mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#212121", mb: 0.5 }}>
                  Direct PDF Opening
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Open documents directly in new tabs from the documents table
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Paper>

      {/* Main Content - Accordion Style */}
      <Box sx={{ mb: 4 }}>
        {/* Navigation Section */}
        <Accordion
          expanded={expanded === "navigation"}
          onChange={handleChange("navigation")}
          sx={{
            mb: 2,
            borderRadius: "16px !important",
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
            "&:before": { display: "none" },
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }} />}
            sx={{
              backgroundColor: "#fafafa",
              minHeight: "64px",
              "&.Mui-expanded": {
                borderBottom: "1px solid #e0e0e0",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}15`,
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NavigateNext
                  sx={{
                    color: theme.palette.kyoPurple.main || "#6e3cbe",
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#212121", fontSize: "1.1rem" }}
              >
                Navigating the Website
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            <Typography
              variant="body1"
              sx={{ mb: 3, color: "#555", fontSize: "1.1rem" }}
            >
              Welcome to Kyocera's Document Repository! Here's how you can
              navigate and find the documents you need:
            </Typography>

            <List>
              <ListItem sx={{ mb: 1 }}>
                <ListItemIcon>
                  <Home
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Home Dashboard"
                  secondary="Overview of available documents and quick access to frequently used sections"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>

              <ListItem sx={{ mb: 1 }}>
                <ListItemIcon>
                  <FolderOpen
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="All Documents"
                  secondary="Browse through all available documents including policies, forms, and resources"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>

              <ListItem sx={{ mb: 1 }}>
                <ListItemIcon>
                  <Policy
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Policies & Procedures"
                  secondary="Access all company policies in PDF format. Click on any policy to view or download"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>

              <ListItem sx={{ mb: 1 }}>
                <ListItemIcon>
                  <Article
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Forms & Templates"
                  secondary="Find and download forms for various processes in editable formats"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <FilterAlt
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Smart Filtering"
                  secondary="Use category and function filters to narrow down your search results"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>
              <ListItem sx={{ mb: 1 }}>
                <ListItemIcon>
                  <OpenInNew
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Quick Actions from Table"
                  secondary="Open documents directly in new tab using the action icon in the documents table"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "#2c2c2c",
                    },
                    "& .MuiListItemText-secondary": { color: "#666" },
                  }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* PDF Viewing Section */}
        <Accordion
          expanded={expanded === "viewing"}
          onChange={handleChange("viewing")}
          sx={{
            mb: 2,
            borderRadius: "16px !important",
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
            "&:before": { display: "none" },
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }} />}
            sx={{
              backgroundColor: "#fafafa",
              minHeight: "64px",
              "&.Mui-expanded": {
                borderBottom: "1px solid #e0e0e0",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}15`,
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PictureAsPdf
                  sx={{
                    color: theme.palette.kyoPurple.main || "#6e3cbe",
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#212121", fontSize: "1.1rem" }}
              >
                Viewing & Downloading Documents
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              <Card
                sx={{
                  p: 2,
                  backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}08`,
                  border: `1px solid ${theme.palette.kyoPurple.main || "#6e3cbe"}33`,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Visibility
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c2c2c" }}
                  >
                    Viewing PDFs
                  </Typography>
                </Box>
                <List dense>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Click on any document row to open the viewer
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Loading spinner appears while PDF loads
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • View document details in the left sidebar
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Use floating action bar at bottom for quick actions
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Click "Open in Tab" to view PDF in new tab
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Hide action bar for cleaner viewing experience
                    </Typography>
                  </ListItem>
                </List>
              </Card>

              <Card
                sx={{
                  p: 2,
                  backgroundColor: "#2828280A",
                  border: "1px solid #28282833",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Download sx={{ color: "#282828" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c2c2c" }}
                  >
                    Downloading
                  </Typography>
                </Box>
                <List dense>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Click "Download" button in floating action bar
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • File downloads directly to your device
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • File format determined by administrator settings
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Right-click PDF and select "Save As"
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      • Documents save with original filename
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Search Section */}
        <Accordion
          expanded={expanded === "search"}
          onChange={handleChange("search")}
          sx={{
            mb: 2,
            borderRadius: "16px !important",
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
            "&:before": { display: "none" },
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }} />}
            sx={{
              backgroundColor: "#fafafa",
              minHeight: "64px",
              "&.Mui-expanded": {
                borderBottom: "1px solid #e0e0e0",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}15`,
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Search
                  sx={{
                    color: theme.palette.kyoPurple.main || "#6e3cbe",
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#212121", fontSize: "1.1rem" }}
              >
                Search Features
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              <Card
                sx={{
                  p: 3,
                  backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}08`,
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Search
                    sx={{ color: theme.palette.kyoPurple.main || "#6e3cbe" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c2c2c" }}
                  >
                    Search by Name
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
                  Use the search bar to quickly find specific documents by their
                  title or name.
                </Typography>
                <Chip
                  label="Quick & Easy"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.kyoPurple.main || "#6e3cbe",
                    color: "white",
                  }}
                />
              </Card>

              <Card
                sx={{
                  p: 3,
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <FindInPage sx={{ color: "#282828" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#2c2c2c" }}
                  >
                    Search by Content
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
                  Search through document contents using exact word matching.
                  Results display in a comprehensive table.
                </Typography>
                <Chip
                  label="Advanced Search"
                  size="small"
                  sx={{ backgroundColor: "#282828", color: "white" }}
                />
              </Card>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Contact Support Section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          padding: "40px",
          textAlign: "center",
          background: "white",
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${theme.palette.kyoPurple.main || "#6e3cbe"}15`,
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            mb: 2,
          }}
        >
          <Email
            sx={{
              fontSize: "2.5rem",
              color: theme.palette.kyoPurple.main || "#6e3cbe",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 1.5, color: "#212121" }}
        >
          Need Additional Help?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#666", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 24px" }}
        >
          If you encounter any issues, have questions, or want to report a bug, our support team is ready to assist you!
        </Typography>
        <Button
          variant="contained"
          startIcon={<Email />}
          href="mailto:BusinessSolutions@dau.kyocera.com"
          sx={{
            backgroundColor: theme.palette.kyoPurple.main || "#6e3cbe",
            color: "white",
            fontWeight: 600,
            borderRadius: "12px",
            textTransform: "none",
            padding: "14px 32px",
            fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(110, 60, 190, 0.3)",
            "&:hover": {
              backgroundColor: "#5a2d9f",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(110, 60, 190, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Contact Support
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "#999", fontSize: "0.875rem" }}
        >
          BusinessSolutions@dau.kyocera.com
        </Typography>
      </Paper>
    </Box>
  );
}
