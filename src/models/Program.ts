export const getPrograms = async () => {
    const res = await fetch(`http://localhost:3000/programs`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getProgramById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/programs/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createProgram = async () => {
    const res = await fetch(`http://localhost:3000/programs`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateProgram = async (id: string) => {
    const res = await fetch(`http://localhost:3000/programs/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteProgram = async (id: string) => {
    const res = await fetch(`http://localhost:3000/programs/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};





export type ProgramPayload = {
    msg?: string;
    data: ProgramType;
    status: number;
  };

  export type ProgramsPayload = {
    msg?: string;
    data: ProgramType[];
    status: number;
  };
  
  export type ProgramType = {
    _id: string;
    name: string;
    image: string;
    upvote: string;
    downvote: string;
  };