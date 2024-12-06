import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />;
      <HelloWorldArticle />;
      <HelloWorldArticle />;
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>Some text</p>
    </article>
  );
}
