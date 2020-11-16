import React, { useState } from "react";
//Core Imports

import AvatarEditor from "react-avatar-editor";
import { Button, Slider, Grid } from "@material-ui/core";

interface Props {
  onCrop: () => void;
  imageSrc: string;
  editorRef: any;
}

const CropImage = ({ imageSrc, onCrop, editorRef }: Props) => {
  const [scaleValue, setScaleValue] = useState<number>(1.3);
  const [rotation, setRotation] = useState<number>(0);
  const handleChange = (event: any, newValue: number | number[]) => {
    setScaleValue(newValue as number);
  };

  const rotateLeft = () => {
    setRotation((prevState) => prevState - 90);
  };

  const rotateRight = () => {
    setRotation((prevstate) => prevstate + 90);
  };

  return (
    <Grid container alignContent="center" justify="center">
      <Grid item xs={12}>
        <AvatarEditor
          border={10}
          borderRadius={100}
          ref={editorRef}
          scale={scaleValue}
          rotate={rotation}
          image={imageSrc}
        />
      </Grid>
      <Grid xs={8} item>
        Zoom
        <Slider
          value={scaleValue}
          onChange={handleChange}
          max={10}
          min={1}
          aria-labelledby="continuous-slider"
        />
      </Grid>
      <Grid xs={12} item>
        Rotate
      </Grid>
      <Grid xs={6} item>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={rotateLeft}
        >
          Left
        </Button>
      </Grid>
      <Grid xs={6} item>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={rotateRight}
        >
          Right
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" color="primary" onClick={onCrop}>
          Crop
        </Button>
      </Grid>
    </Grid>
  );
};

export default CropImage;
