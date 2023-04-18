import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./drawer.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon sx={{ color: "white" }} className="link21" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link to="/">
            <p className="link21">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link21">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link21">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <p className="link21">Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}