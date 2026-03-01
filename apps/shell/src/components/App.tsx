import { PaneSplit } from "@zephyr-example/shared/components/PaneSplit.tsx";
import type { Notes } from "@zephyr-example/shared/notes.ts";
import React, { useMemo, useState } from "react";

const EditPane = React.lazy(async () => ({
  default: (await import("edit_pane/components/EditPane")).EditPane,
}));

const NavigationBar = React.lazy(async () => ({
  default: (await import("navigation_bar/components/NavigationBar"))
    .NavigationBar,
}));

const SelectionPane = React.lazy(async () => ({
  default: (await import("selection_pane/components/SelectionPane"))
    .SelectionPane,
}));

export function App() {
  const [notes, setNotes] = useState<Notes>(() => [
    {
      id: crypto.randomUUID(),
      title: "This is an example entry",
      content:
        "The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.",
    },
  ]);

  const [selectedEntryId, setSelectedEntryId] = useState(notes[0]?.id);
  const selectedEntry = useMemo(
    () => notes.find((entry) => entry.id == selectedEntryId),
    [selectedEntryId],
  );

  const handleTitleChange = (newTitle: string) => {
    if (selectedEntryId == undefined) {
      return;
    }

    setNotes((notes) =>
      notes.map((entry) =>
        entry.id != selectedEntryId
          ? entry
          : {
              ...entry,

              title: newTitle,
            },
      ),
    );
  };

  const handleContentChange = (newContent: string) => {
    if (selectedEntryId == undefined) {
      return;
    }

    setNotes((notes) =>
      notes.map((entry) =>
        entry.id != selectedEntryId
          ? entry
          : {
              ...entry,

              content: newContent,
            },
      ),
    );
  };

  const handleNewEntry = () => {
    const id = crypto.randomUUID();

    setNotes((notes) => [
      ...notes,
      {
        id,
        title: "",
        content: "",
      },
    ]);

    setSelectedEntryId(id);
  };

  const handleDeleteEntry = () => {
    setSelectedEntryId(undefined);
    setNotes((notes) => notes.filter((entry) => entry.id != selectedEntryId));
  };

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <PaneSplit className="pb-2 px-2">
        <EditPane
          className="flex-1 h-full"
          disabled={selectedEntry == undefined}
          title={selectedEntry?.title ?? ""}
          content={selectedEntry?.content ?? ""}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          onNewEntry={handleNewEntry}
          onDeleteEntry={handleDeleteEntry}
        />

        <SelectionPane
          className="flex-1 p-2"
          notes={notes}
          selectedEntryId={selectedEntryId}
          onEntrySelected={setSelectedEntryId}
        />
      </PaneSplit>
    </div>
  );
}
