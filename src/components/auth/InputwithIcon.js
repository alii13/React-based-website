import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { NavLink, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function InputWithIcons(props) {
  const { link, text } = props;
  const LinkInter = `/${link}`;

  return (
    <div className="container mine">
      <div className="pb-2">
        <TextField id="standard-basic" label="Email" fullWidth />
      </div>
      <div className="pb-4">
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />
      </div>
      <div class="helper d-flex justify-content-between">
        <div className="forgot">
          <a href="#" className="text-primary">
            Forgot Password?
          </a>
        </div>
        <div className="signUp">
          <NavLink to={LinkInter} className="text-primary">
            {text}
          </NavLink>
          <Route path={LinkInter} />
        </div>
      </div>
    </div>
  );
}
