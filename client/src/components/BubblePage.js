import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from "../axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        console.log("response", response);
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
