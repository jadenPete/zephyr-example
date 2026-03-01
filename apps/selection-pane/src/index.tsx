import { defaultNotes } from "@zephyr-example/shared/notes.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SelectionPane } from "./components/SelectionPane";
import "./assets/index.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <SelectionPane
      notes={defaultNotes}
      selectedEntryId={defaultNotes[0]?.id}
      onEntrySelected={() => {}}
    />
  </StrictMode>,
);
