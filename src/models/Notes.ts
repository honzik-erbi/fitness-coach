export const getNotes = async () => {
    const res = await fetch(`http://localhost:3000/notes`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getNoteById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createNote = async () => {
    const res = await fetch(`http://localhost:3000/notes`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateNote = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteNote = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
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
    username: string;
    phone: number;
    password: string;
  };