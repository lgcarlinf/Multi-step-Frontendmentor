import React, { useContext } from "react";
import { FormContext } from "../context/formContext";

const useInfoSave = () => {
  const formContext = useContext(FormContext);

  return formContext;
};

export default useInfoSave;
