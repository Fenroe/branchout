import React from "react";
import { Avatar } from "@mui/material";

const UserAvatar = ({ profilePicture, size }) => {
  const getAvatarStyle = (avatarSize) => {
    switch (avatarSize) {
      case "small":
        return {
          height: 24,
          width: 24,
        };
      case "medium":
        return {
          height: 40,
          width: 40,
        };
      case "large":
        return {
          height: 56,
          width: 56,
        };
    }
  };
  return (
    <Avatar
      sx={getAvatarStyle(size)}
      src={profilePicture || "/profile-default.svg"}
    />
  );
};

export default UserAvatar;
