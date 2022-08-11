import { FC } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import GithubIcon from "@mui/icons-material/GitHub";

interface IAvatarProps {
  image: string;
}

export const UserAvatar: FC<IAvatarProps> = ({ image }) => {
  return (
    <Stack direction="row" spacing={2}>
      {image ? <Avatar alt="user avatar" src={image} /> : <GithubIcon />}
    </Stack>
  );
};
