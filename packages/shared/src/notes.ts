export type Notes = NoteEntry[];
export type NoteEntry = {
  id: string;
  title: string;
  content: string;
};

export const defaultNotes: Notes = [
  {
    id: crypto.randomUUID(),
    title: "This is an example entry",
    content:
      "The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.",
  },
];
