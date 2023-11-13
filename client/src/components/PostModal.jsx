import {
  Card,
  Grid,
  Stack,
  Button,
  Avatar,
  Box,
  Typography,
  IconButton,
  Link,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
} from "@mui/material";
import React from "react";
import OptionsIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/CommentOutlined";
import LikeIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import UserAvatar from "./UserAvatar";

const PostModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Card
          elevation={0}
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, nam? Architecto tenetur dignissimos nam placeat!
              Dignissimos ad deserunt consequatur aspernatur iste eveniet
              ducimus autem officiis fuga error dolor, vel nostrum.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/scenery.jpg" style={{ maxWidth: "100%", borderRadius: "1rem" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button size="small">10 likes</Button>
            <Button size="small">10 comments</Button>
          </Box>
          <ButtonGroup>
            <Button fullWidth startIcon={<LikeIcon />}>
              Like
            </Button>
            <Button fullWidth startIcon={<CommentIcon />}>
              Comment
            </Button>
          </ButtonGroup>
        </Card>
        <Stack sx={{ p: 2 }}>
          <Stack>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <UserAvatar size="medium" />
              </Box>
              <Stack>
                <Card sx={{ bgcolor: "#ebebeb", p: 2, borderRadius: "1rem" }}>
                  <Typography sx={{ fontWeight: 700 }}>David Slade</Typography>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis dolorem deleniti mollitia sint. Molestiae laborum
                    porro tempora, quo explicabo consequatur accusantium quis?
                    Excepturi molestiae deserunt nemo blanditiis nam velit
                    ipsum.
                  </Typography>
                </Card>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography>10m</Typography>
                    <Button startIcon={<LikeIcon />}>10</Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <UserAvatar size="medium" />
              </Box>
              <Stack>
                <Card sx={{ bgcolor: "#ebebeb", p: 2, borderRadius: "1rem" }}>
                  <Typography sx={{ fontWeight: 700 }}>David Slade</Typography>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis dolorem deleniti mollitia sint. Molestiae laborum
                    porro tempora, quo explicabo consequatur accusantium quis?
                    Excepturi molestiae deserunt nemo blanditiis nam velit
                    ipsum.
                  </Typography>
                </Card>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography>10m</Typography>
                    <Button startIcon={<LikeIcon />}>10</Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Stack sx={{ p: 2, width: "100%" }}>
          <Grid gap={2} container flexWrap="nowrap">
            <UserAvatar size="medium" />
            <TextField
              autoFocus
              variant="standard"
              multiline
              fullWidth
              hiddenLabel
            />
          </Grid>
          <Grid gap={2} container flexWrap="nowrap" justifyContent="end">
            <IconButton disabled>
              <SendIcon />
            </IconButton>
          </Grid>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default PostModal;
