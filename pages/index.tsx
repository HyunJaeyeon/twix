import React from "react";
import Item from "../components/item";

export default () => (
  <>
    <h1>Main Page</h1>
    <div className="flex flex-col space-y-5 divide-y">
      {["안녕하세요!", "반갑습니다", "안녕하세요 ~~"].map((k, i) => (
        <Item id={i} key={k} title={k} hearts={1} />
      ))}
    </div>
  </>
);
