import React from "react";
import { Button } from "@material-ui/core";

export default function SignOutBtn({ variant, onClick }) {
  return (
    <div>
      <Button
        variant={variant}
        color="primary"
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
