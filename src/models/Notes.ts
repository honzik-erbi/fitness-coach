export const getNotes = async () => {
  const res = await fetch(`http://localhost:3000/notes`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotesPayload(res, data);
};

export const getNoteById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotePayload(res, data);
};

export const createNote = async () => {
  const res = await fetch(`http://localhost:3000/notes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotePayload(res, data);
};

export const updateNote = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotePayload(res, data);
};

export const deleteNote = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotePayload(res, data);
};

const createNotePayload = (res: Response, data: any): NotePayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createNotesPayload = (res: Response, data: any): NotesPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type NotePayload = {
  msg?: string;
  data: NoteType;
  status: number;
};

export type NotesPayload = {
  msg?: string;
  data: NoteType[];
  status: number;
};

export type NoteType = {
  _id: string;
};
