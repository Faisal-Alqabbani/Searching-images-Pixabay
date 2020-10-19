import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageDilaog({ currentImage, show, handleClose }) {
  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ padding: "0" }}>
          <img
            src={currentImage}
            alt="Hooly"
            style={{ width: "100%", height: "100%" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
