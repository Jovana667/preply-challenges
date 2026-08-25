import { createContext, useContext, useMemo, useState } from 'react';

type Note = { 
    id: string; 
    text: string 
};


const NoteContext = createContext<{
  notes: Note[];
  count: number;
  addNote: (text: string) => void;
} | null>(null);

export function NoteProvider({ children }: { children: React.ReactNode }) {

const [notes, setNotes] = useState<Note[]>([])

const addNote = (text: string) => {
  const newNote = { id: crypto.randomUUID(), text };
  setNotes([...notes, newNote]);
};

const count= useMemo(() => {
  return notes.length;
}, [notes]);

return (
<NoteContext.Provider value={{ notes, count, addNote }}>
    {children} 
</NoteContext.Provider>
)
}

export const useNotes = () => useContext(NoteContext);