import React from "react";
import auth from "./authenticate";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export default function SignOutBtn({ variant, onClick, style }) {
  return (
    <div>
      <Button
        variant={variant}
        color="primary"
        type="button"
        style={style}
        onClick={() => {
          onClick();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
