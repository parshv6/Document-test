import React, { useState } from "react";
import { firebaseApp } from "./base";
import "./NewsAlbumForm.css";

const db = firebaseApp.firestore();

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    db.collection("albums").doc(albumName).set({
      name: albumName,
    });
    setAlbumName("");
  };

  return (
    <>
    <div className="box">
    <input value={albumName} onChange={onAlbumNameChange} type="text" />
      <button onClick={onAlbumCreate}>Create album</button>
      </div>
    </>
  );
};