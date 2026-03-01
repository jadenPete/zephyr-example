import { defaultNotes } from "@zephyr-example/shared/notes.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EditPane } from "./components/EditPane";
import "./assets/index.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <EditPane
      title={defaultNotes[0]?.title ?? ""}
      content={defaultNotes[0]?.content ?? ""}
      onTitleChange={() => {}}
      onContentChange={() => {}}
      onNewEntry={() => {}}
      onDeleteEntry={() => {}}
    />
  </StrictMode>,
);
