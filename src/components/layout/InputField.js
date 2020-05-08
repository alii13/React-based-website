import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function InputWithIcons(props) {
  const { type, label, id } = props;

  return (
    <div className="container mine">
      <div className="pb-2">
        <TextField id={id} type={type} label={label} fullWidth />
      </div>
    </div>
  );
}
