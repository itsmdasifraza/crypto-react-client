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
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <div>
          <Link to="/">
            <p className="link21">CoinStats</p>
          </Link>
          </div>
          <Link to="/">
            <p className="link21">Home</p>
          </Link>
          <Link to="/dashboard">
            <p className="link21">Coin</p>
          </Link>
          <Link to="/compare">
            <p className="link21">Compare</p>
          </Link>
          <Link to="/starred">
            <p className="link21">Starred</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}