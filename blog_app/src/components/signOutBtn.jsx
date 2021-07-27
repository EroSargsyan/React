import React from "react";
import { Button } from "@material-ui/core";

export default function SignOutBtn({ variant, onClick, style }) {
  return (
    <div>
      <Button
        variant={variant}
        color="primary"
        type="button"
        // style={style}
        onClick={() => {
          onClick();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
