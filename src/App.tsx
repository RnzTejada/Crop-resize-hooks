import React, { useState, useRef } from "react";
import "./App.css";
import Image from "./assets/avatar.jpeg";
import Editor from "./componets/Editor";
import Avatar from "react-avatar";
import AvatarEditor from "react-avatar-editor";
import Grid from "@material-ui/core/Grid";

function App() {
  const [newImage, setNewImage] = useState<string>("");

  let editorRef = useRef<AvatarEditor>(null);

  const onCrop = () => {
    if (editorRef && editorRef.current) {
      let url = editorRef.current.getImageScaledToCanvas().toDataURL();
      setNewImage(url);
    }
  };

  return (
    <div className="App content">
      <h2>Resize & Crop the photo!</h2>
      <Editor onCrop={onCrop} editorRef={editorRef} imageSrc={Image} />
      {newImage ? (
        <>
          <Grid container xs={12} justify="center">
            <Avatar
              src={newImage}
              style={{ marginTop: "10px" }}
              size="250px"
              round
            />
          </Grid>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
