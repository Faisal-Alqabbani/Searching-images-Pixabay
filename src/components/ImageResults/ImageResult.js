import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { ZoomIn } from "@material-ui/icons";
import { Dialog } from "@material-ui/core";
import ImageDialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageResult({ images }) {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const classes = useStyles();
  console.log(images);

  let imageContent;
  if (images) {
    imageContent = (
      <div className={classes.root}>
        <GridList cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
            <ListSubheader component="div">Images</ListSubheader>
          </GridListTile>
          {images.map((img) => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt="pis" />
              <GridListTileBar
                title={img.tags}
                subtitle={<span>by: {img.user}</span>}
                actionIcon={
                  <IconButton
                    onClick={() => handleOpen(img.largeImageURL)}
                    aria-label={`info about ${img.tags}`}
                    className={classes.icon}
                  >
                    <ZoomIn />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  } else {
    imageContent = null;
  }

  // Dialog stuff
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = (img) => {
    setCurrentImage(img);
    setShow(true);
  };

  return (
    <>
      {imageContent}
      <ImageDialog
        currentImage={currentImage}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}
