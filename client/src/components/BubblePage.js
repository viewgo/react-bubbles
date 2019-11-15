import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from "../axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log("CHANGE TRIGGERED!");
    getData();
  }, [trigger]);

  const getData = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(response => {
        console.log("response", response);
        setColorList(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  console.log(colorList);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
