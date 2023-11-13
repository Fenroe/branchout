import {
  Card,
  Button,
  Box,
  Typography,
  IconButton,
  Link,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import OptionsIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/CommentOutlined";
import LikeIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PostModal from "./PostModal";
import UserAvatar from "./UserAvatar";

const PostThread = () => {
  const [showComments, setShowComments] = useState(false);

  const [postModalIsOpen, setPostModalIsOpen] = useState(false);

  const openPostModal = () => {
    setPostModalIsOpen(true);
  };

  const closePostModal = () => {
    setPostModalIsOpen(false);
  };

  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, flex: 1, overflow: "hidden" }}>
          <UserAvatar size="large" />
          <Box
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Link href="/" underline="hover" sx={{ color: "black" }}>
              <Typography sx={{ fontWeight: 700 }} noWrap>
                David Slade
              </Typography>
            </Link>
            <Typography variant="body2" noWrap>
              5 minutes ago
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <OptionsIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          nam? Architecto tenetur dignissimos nam placeat! Dignissimos ad
          deserunt consequatur aspernatur iste eveniet ducimus autem officiis
          fuga error dolor, vel nostrum.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" startIcon={<LikeIcon />}>
          10
        </Button>
        <Button size="small">10 comments</Button>
      </Box>
      <ButtonGroup>
        <Button fullWidth startIcon={<LikeIcon />}>
          Like
        </Button>
        <Button fullWidth startIcon={<CommentIcon />} onClick={openPostModal}>
          Comment
        </Button>
      </ButtonGroup>
      <PostModal open={postModalIsOpen} onClose={closePostModal} />
    </Card>
  );
};

export default PostThread;
