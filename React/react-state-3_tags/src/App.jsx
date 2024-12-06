import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleTag(newTag) {
    setTags([...tags, newTag]);
  }
  function handleDeleteTag(tagToDelete) {
    const mutatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(mutatedTags);
  }

  return (
    <main className="app">
      <Form onAddTag={handleTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
