import "../assets/index.css";
import {
  Pane,
  PaneSplit,
} from "@zephyr-example/shared/components/PaneSplit.tsx";

export function AddButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className={`fab static ${className == undefined ? "" : className}`}>
      <button
        type="button"
        className="btn btn-lg btn-circle btn-primary"
        onClick={() => onClick()}
      >
        <svg
          aria-label="New"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

export function DeleteButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className={`fab static ${className == undefined ? "" : className}`}>
      <button
        type="button"
        className="btn btn-lg btn-circle btn-secondary"
        onClick={() => onClick()}
      >
        <svg
          aria-label="New"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15" />
        </svg>
      </button>
    </div>
  );
}

export function EditPane({
  className,
  disabled = false,
  title,
  content,
  onTitleChange,
  onContentChange,
  onNewEntry,
  onDeleteEntry,
}: {
  className?: string;
  disabled?: boolean;
  title: string;
  content: string;
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newContent: string) => void;
  onNewEntry: () => void;
  onDeleteEntry: () => void;
}) {
  return (
    <PaneSplit
      orientation="vertical"
      {...(className == undefined ? {} : { className })}
    >
      <Pane>
        <input
          type="input"
          className="input input-ghost input-xl bg-base-200 focus:bg-base-200 focus:outline-none focus:ring-0 resize-none w-full"
          defaultValue={title}
          key={title}
          disabled={disabled}
          placeholder={disabled ? "" : "Enter a title"}
          onChange={(event) => onTitleChange(event.target.value)}
        />
      </Pane>

      <Pane className="grow relative">
        <textarea
          className="textarea textarea-ghost bg-base-200 border-0 focus:bg-base-200 focus:outline-none focus:ring-0 grow resize-none w-full"
          defaultValue={content}
          key={content}
          disabled={disabled}
          placeholder={disabled ? "" : "Type something here"}
          onChange={(event) => onContentChange(event.target.value)}
        />

        <div className="absolute bottom-4 right-4 flex gap-2">
          <DeleteButton onClick={() => onDeleteEntry()} />
          <AddButton onClick={() => onNewEntry()} />
        </div>
      </Pane>
    </PaneSplit>
  );
}
