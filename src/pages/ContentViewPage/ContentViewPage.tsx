import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Document } from "../../Types/types";
import docService from "../../features/Documents/services/docService";
import {
  Paper,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Chip,
  Skeleton,
} from "@mui/material";
import {
  Download,
  OpenInNew,
  Home,
  Description,
  Article,
  Policy,
  Assignment,
  Category,
  Functions,
  CalendarToday,
  ArrowBack,
  MoreHoriz,
} from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function ContentViewPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [documentData, setDocumentData] = useState<Document | null>(null);
  const [downloadType, setDownloadType] = useState<string>("");
  const [showActions, setShowActions] = useState(true);
  const [pdfLoading, setPdfLoading] = useState(true);

  // Extract search state from URL params
  const hasSearchState =
    searchParams.has("search") ||
    searchParams.has("filterCategory") ||
    searchParams.has("filterFunctions");
  const fromCategory = searchParams.get("fromCategory");

  const handleBackToSearch = () => {
    // Build the return URL with preserved search state
    const returnPath = fromCategory
      ? `/documents/${fromCategory}`
      : "/documents";
    const queryString = searchParams.toString();
    navigate(`${returnPath}${queryString ? `?${queryString}` : ""}`);
  };

  useEffect(() => {
    const getDocumentContent = async () => {
      try {
        if (!id) {
          console.error("No ID found in the URL");
          return;
        }

        // Fetch the Base64-encoded document content
        const response = await docService.getDocumentContent(id);

        // Decode the Base64 content and create a Blob URL
        const byteCharacters = atob(response.content); // Decode Base64
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" }); // Create Blob
        const url = URL.createObjectURL(blob); // Create Blob URL
        setPdfUrl(url); // Set the URL for the iframe
        setPdfLoading(false);
      } catch (error) {
        console.error(
          "There was an error fetching the document content:",
          error
        );
      }
    };

    const getDocumentById = async () => {
      try {
        if (!id) {
          console.error("No ID found in the URL");
          return;
        }

        const response = await docService.getDocumentById(id);

        if (response.data.downloadoriginalfiletype !== true) {
          setDownloadType("PDF");
        } else {
          setDownloadType("");
        }
        setDocumentData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getDocumentContent();
    getDocumentById();
  }, [id]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDownloadClick = async () => {
    try {
      if (!id) {
        console.error("No ID found in the URL");
        return;
      }

      const response = await docService.getDocumentDownload(id, downloadType);
      const blobUrl = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = blobUrl;
      const fileName = documentData?.name ? documentData.name : "document";
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the document:", error);
    }
  };

  const handleOpenInNewTab = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  // Get appropriate icon based on document type
  const getDocumentIcon = () => {
    const type = documentData?.data.type?.toLowerCase();
    const iconProps = {
      sx: {
        fontSize: "2rem",
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "#6e3cbe",
        color: "white",
        boxShadow: "0 2px 8px rgba(110, 60, 190, 0.3)",
      },
    };

    switch (type) {
      case "policy":
        return <Policy {...iconProps} />;
      case "procedure":
        return <Assignment {...iconProps} />;
      case "form":
        return <Article {...iconProps} />;
      default:
        return <Description {...iconProps} />;
    }
  };

  // Show skeleton loading while data is being fetched
  if (!documentData || !pdfUrl) {
    return (
      <Box
        sx={{
          height: "calc(100vh - 140px)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "8px",
        }}
      >
        {/* Left Sidebar Skeleton */}
        <Paper
          elevation={2}
          sx={{
            background:
              "linear-gradient(135deg, rgba(110, 60, 190, 0.05) 0%, rgba(110, 60, 190, 0.02) 100%)",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid rgba(110, 60, 190, 0.1)",
            width: "380px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Breadcrumbs Skeleton */}
          <Box display="flex" gap={1} mb={1}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={120} height={20} />
          </Box>

          {/* Buttons Skeleton */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton variant="rounded" width="100%" height={36} />
            <Skeleton variant="rounded" width="100%" height={36} />
          </Box>

          {/* Header Skeleton */}
          <Box display="flex" alignItems="flex-start" gap={2} mt={2}>
            <Skeleton variant="circular" width={64} height={64} />
            <Box flex={1}>
              <Skeleton variant="text" width="100%" height={32} />
              <Skeleton
                variant="rounded"
                width={100}
                height={28}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          {/* Document Info Table Skeleton */}
          <Box mt={2}>
            <Skeleton variant="text" width={180} height={28} sx={{ mb: 2 }} />
            <Box display="flex" flexDirection="column" gap={1}>
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
            </Box>
          </Box>

          {/* Action Buttons Skeleton */}
          <Box mt={2}>
            <Skeleton variant="text" width={120} height={28} sx={{ mb: 2 }} />
            <Box display="flex" flexDirection="column" gap={1.5}>
              <Skeleton variant="rounded" width="100%" height={46} />
              <Skeleton variant="rounded" width="100%" height={46} />
            </Box>
          </Box>
        </Paper>

        {/* PDF Viewer Skeleton */}
        <Box
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            flex: 1,
            minWidth: 0,
            backgroundColor: "#fff",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "calc(100vh - 140px)",
        display: "flex",
        flexDirection: "row", // Changed to row layout
        gap: 2,
        padding: "8px",
      }}
    >
      {/* Left Sidebar - Header Component */}
      <Paper
        elevation={1}
        sx={{
          background: "#fafafa",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e0e0e0",
          width: "420px", // Fixed width for sidebar
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 3,

          boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
          overflow: "auto", // Allow scrolling if content overflows
        }}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" sx={{ color: "#bdbdbd" }} />
          }
          sx={{
            mb: 0,
            pb: 2,
            borderBottom: "2px solid #e0e0e0",
          }}
        >
          <Link
            component="button"
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              fontSize: "0.875rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              color: "#757575",
              fontWeight: 500,
              "&:hover": { color: "#6e3cbe" },
            }}
          >
            <Home sx={{ mr: 0.5, fontSize: "0.9rem" }} />
            Dashboard
          </Link>
          <Link
            component="button"
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/documents");
            }}
            sx={{
              textDecoration: "none",
              fontSize: "0.9rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              "&:hover": { color: "#6e3cbe" },
            }}
          >
            Documents
          </Link>
          <Link
            component="button"
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/documents/${documentData?.data.type?.toLowerCase()}`);
            }}
            sx={{
              textDecoration: "none",
              fontSize: "0.9rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              "&:hover": { color: "#6e3cbe" },
            }}
          >
            {documentData?.data.type || "Document Type"}
          </Link>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.875rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "180px",
              color: "#212121",
            }}
          >
            {documentData?.name || "Document"}
          </Typography>
        </Breadcrumbs>

        {/* Navigation Buttons */}
        <Box display="flex" flexDirection="column" gap={1.5}>
          {/* Back to Search Button (if coming from search) */}
          {hasSearchState && (
            <Button
              onClick={handleBackToSearch}
              startIcon={<ArrowBack />}
              variant="contained"
              size="medium"
              fullWidth
              sx={{
                backgroundColor: "#6e3cbe",
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "10px",
                py: 1.2,
                fontSize: "0.9rem",
                boxShadow: "0 2px 8px rgba(110, 60, 190, 0.25)",
                "&:hover": {
                  backgroundColor: "#5a2d9f",
                  boxShadow: "0 4px 12px rgba(110, 60, 190, 0.35)",
                },
              }}
            >
              Back to Search
            </Button>
          )}

          {/* Back to Documents Button (always visible) */}
          <Button
            onClick={() => navigate("/documents")}
            startIcon={<ArrowBack />}
            variant="outlined"
            size="medium"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderColor: "#e0e0e0",
              color: "#6e3cbe",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              py: 1.2,
              fontSize: "0.9rem",
              borderWidth: "1px",
              "&:hover": {
                backgroundColor: "rgba(110, 60, 190, 0.05)",
                borderColor: "#6e3cbe",
                borderWidth: "1px",
              },
            }}
          >
            Back to Documents
          </Button>
        </Box>

        {/* Document Header */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box display="flex" alignItems="flex-start" gap={2}>
            {/* Icon */}
            <Box
              flexShrink={0}
              sx={{
                backgroundColor: "rgba(110, 60, 190, 0.1)",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {getDocumentIcon()}
            </Box>

            {/* Title and Type */}
            <Box flex={1} minWidth={0}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#212121",
                  fontSize: "1.05rem",
                  lineHeight: 1.4,
                  wordBreak: "break-word",
                  mb: 1.2,
                }}
              >
                {documentData?.name || "Loading..."}
              </Typography>

              {/* Document Type Badge */}
              {documentData?.data.type && (
                <Chip
                  label={documentData.data.type}
                  size="small"
                  sx={{
                    backgroundColor: "#6e3cbe",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    height: "26px",
                    borderRadius: "6px",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>

        {/* Document Information Section */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#212121",
              fontSize: "0.95rem",
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Description sx={{ fontSize: "1.1rem", color: "#6e3cbe" }} />
            Document Information
          </Typography>

          {/* Document Details */}
          {documentData && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {/* Categories */}
              {documentData.data.category &&
                documentData.data.category.length > 0 && (
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1.2}>
                      <Category sx={{ fontSize: "1.1rem", color: "#6e3cbe" }} />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#616161",
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Categories
                      </Typography>
                    </Box>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      {documentData.data.category.map((category, index) => (
                        <Chip
                          key={index}
                          label={category}
                          size="small"
                          sx={{
                            height: "28px",
                            fontSize: "0.8rem",
                            backgroundColor: "rgba(110, 60, 190, 0.1)",
                            color: "#6e3cbe",
                            fontWeight: 600,
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "rgba(110, 60, 190, 0.15)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

              {/* Functions */}
              {documentData.data.functionsubfn &&
                documentData.data.functionsubfn.length > 0 && (
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1.2}>
                      <Functions
                        sx={{ fontSize: "1.1rem", color: "#9c27b0" }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#616161",
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Functions
                      </Typography>
                    </Box>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      {documentData.data.functionsubfn.map((func, index) => (
                        <Chip
                          key={index}
                          label={func}
                          size="small"
                          sx={{
                            height: "28px",
                            fontSize: "0.8rem",
                            backgroundColor: "rgba(156, 39, 176, 0.1)",
                            color: "#9c27b0",
                            fontWeight: 600,
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "rgba(156, 39, 176, 0.15)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

              {/* Release Date */}
              <Box>
                <Box display="flex" alignItems="center" gap={1} mb={1.2}>
                  <CalendarToday
                    sx={{ fontSize: "1.1rem", color: "#43a047" }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#616161",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Released
                  </Typography>
                </Box>
                <Chip
                  label={formatDate(documentData.data.releasedate)}
                  size="small"
                  icon={
                    <CalendarToday
                      sx={{
                        fontSize: "0.9rem !important",
                        color: "#43a047 !important",
                      }}
                    />
                  }
                  sx={{
                    height: "28px",
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(67, 160, 71, 0.1)",
                    color: "#43a047",
                    fontWeight: 600,
                    borderRadius: "6px",
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Paper>

      {/* Right Side - PDF Viewer with Action Buttons */}
      {pdfUrl && (
        <Box
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            flex: 1,
            minWidth: 0,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* PDF Viewer */}
          <Box sx={{ flex: 1, minHeight: 0, position: "relative" }}>
            {pdfLoading && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f5f5f5",
                  zIndex: 5,
                }}
              >
                <LoadingSpinner />
              </Box>
            )}
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              title="Document Content"
              style={{ border: "none" }}
            />

            {/* Floating Action Bar - appears when showActions is true */}
            {showActions && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "10px 16px",
                  borderRadius: "16px",
                  boxShadow:
                    "0 4px 20px rgba(110, 60, 190, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  width: "fit-content",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow:
                      "0 12px 40px rgba(110, 60, 190, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)",
                    transform: "translateX(-50%) translateY(-2px)",
                  },
                }}
              >
                <Button
                  onClick={handleOpenInNewTab}
                  variant="contained"
                  startIcon={<OpenInNew />}
                  sx={{
                    backgroundColor: "#6e3cbe",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "12px",
                    textTransform: "none",
                    height: "40px",
                    px: 2.5,
                    fontSize: "0.85rem",
                    boxShadow: "0 2px 8px rgba(110, 60, 190, 0.2)",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "#5a2d9f",
                      boxShadow: "0 4px 12px rgba(110, 60, 190, 0.4)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Open in Tab
                </Button>
                <Button
                  onClick={handleDownloadClick}
                  variant="outlined"
                  startIcon={<Download />}
                  sx={{
                    borderColor: "#6e3cbe",
                    color: "#6e3cbe",
                    background: "white",
                    fontWeight: 600,
                    borderRadius: "12px",
                    textTransform: "none",
                    height: "40px",
                    px: 2.5,
                    fontSize: "0.85rem",
                    borderWidth: "2px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      borderColor: "#5a2d9f",
                      backgroundColor: "rgba(110, 60, 190, 0.08)",
                      borderWidth: "2px",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Download
                </Button>
                <Button
                  onClick={() => setShowActions(false)}
                  variant="text"
                  sx={{
                    color: "#666",
                    fontWeight: 600,
                    borderRadius: "12px",
                    textTransform: "none",
                    height: "40px",
                    px: 2,
                    fontSize: "0.8rem",
                    minWidth: "auto",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Hide
                </Button>
              </Box>
            )}

            {/* Show Actions Button - appears when action bar is hidden */}
            {!showActions && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  zIndex: 10,
                }}
              >
                <Button
                  onClick={() => setShowActions(true)}
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(110, 60, 190, 0.95)",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    minWidth: "56px",
                    boxShadow: "0 4px 12px rgba(110, 60, 190, 0.4)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      backgroundColor: "rgba(90, 45, 159, 0.95)",
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 16px rgba(110, 60, 190, 0.5)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <MoreHoriz sx={{ color: "white", fontSize: 28 }} />
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContentViewPage;
