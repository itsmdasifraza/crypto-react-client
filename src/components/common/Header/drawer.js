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
      <IconButton sx={{ paddingRight:0 }} onClick={() => setOpen(true)}>
        <MenuRoundedIcon sx={{ color: "white"}} className="link21" />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <div>
          <Link to="/">
            <p className="link21">CoinStats</p>
          </Link>
          <hr/>
          </div>
          <Link to="/">
            <p className="link21">Home</p>
          </Link>
          <Link to="/coins">
            <p className="link21">Coins</p>
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