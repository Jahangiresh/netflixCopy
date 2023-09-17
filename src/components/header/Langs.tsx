import * as React from "react";
import Popover from "@mui/material/Popover";
import { LanguageRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
export default function BasicPopover() {
  const { i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* @ts-ignore  */}
      <LanguageRounded
        style={{ marginLeft: "10px" }}
        aria-describedby={id}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ul
          style={{ background: "white", padding: "10px", cursor: "pointer" }}
          className="headerlangs hidden hover:!block group-hover:block "
        >
          <li
            className="headerlangs__li hover:underline cursor-pointer"
            onClick={() => clickLang("en")}
          >
            english
          </li>
          <li
            className="headerlangs__li hover:underline cursor-pointer"
            onClick={() => clickLang("az")}
          >
            azərbaycan
          </li>
        </ul>
      </Popover>
    </div>
  );
}
