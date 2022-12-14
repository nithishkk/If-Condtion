import React from "react";
import "./style.css";

export default function App({isLoading=true}) {
  if(isLoading){
    return (
      <h1>Loading.. </h1>
    )
  } else {
    return (
      <h1> error</h1>
    )
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
