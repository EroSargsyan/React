import React from "react";
import { Button } from "@material-ui/core";

export default function SignOutBtn({ variant, onClick }) {
  return (
    <Button
      variant={variant}
      color="secondary"
      type="button"
      style={{
        marginLeft: "2em",
      }}
      onClick={() => {
        onClick();
      }}
    >
      Sign Out
    </Button>
  );
}
