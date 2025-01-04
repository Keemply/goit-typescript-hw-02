import { Oval } from "react-loader-spinner";
import React from "react";
import css from "./Loader.module.css";
function Loader() {
  return <Oval height="40" width="40" wrapperClass={css.wrapper} />;
}
export default Loader;
