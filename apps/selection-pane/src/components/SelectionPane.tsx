import "../assets/index.css";
import type { Notes } from "@zephyr-example/shared/notes.ts";
import { Pane } from "@zephyr-example/shared/components/PaneSplit.tsx";

export function SelectionPane({
  className,
  notes,
  selectedEntryId,
  onEntrySelected,
}: {
  className?: string;
  notes: Notes;
  selectedEntryId: string | undefined;
  onEntrySelected: (id: string) => void;
}) {
  return (
    <Pane {...(className == undefined ? {} : { className })}>
      <ul className="menu bg-base-200 w-full">
        {notes.map((entry) => (
          <li key={entry.id}>
            <a
              className={entry.id == selectedEntryId ? "menu-active" : ""}
              onClick={() => onEntrySelected(entry.id)}
            >
              <h1>{entry.title == "" ? "Untitled" : entry.title}</h1>
              <p className="overflow-hidden text-base-content/50 text-ellipsis whitespace-nowrap">
                {entry.content}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Pane>
  );
}
