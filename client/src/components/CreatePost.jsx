import {
  Button,
  Container,
  Dialog,
  Card,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreatePost = ({ open, onClose }) => {
  const [uploadedImage, setUploadedImage] = useState({
    preview: "",
    file: null,
  });

  const handleImageUpload = (evt) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState !== 2) return;
      setUploadedImage({
        preview: reader.result,
        file: evt.target.files[0],
      });
    };
    reader.readAsDataURL(evt.target.files[0]);
  };

  useEffect(() => {
    if (open === true) {
      setUploadedImage({ preview: "", file: null });
    }
  }, [open]);
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create New Post</DialogTitle>
      <DialogContent>
        <Card>
          <TextField
            autoFocus
            placeholder="What are your thoughts?"
            variant="standard"
            fullWidth
            multiline
            sx={{ height: "100%", width: "100%" }}
          />
          {uploadedImage.file !== null && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={uploadedImage.preview} style={{ maxWidth: "100%" }} />
            </Box>
          )}
        </Card>
      </DialogContent>
      <DialogActions>
        <Button component="label" startIcon={<ImageIcon />}>
          <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
        </Button>
        <Button startIcon={<SendIcon />} variant="contained">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePost;
