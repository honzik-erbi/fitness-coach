export const getTimetable = async () => {
    const res = await fetch(`http://localhost:3000/timetable`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getTimetableById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/timetable/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createTimetable = async () => {
    const res = await fetch(`http://localhost:3000/timetable`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateTimetable = async (id: string) => {
    const res = await fetch(`http://localhost:3000/timetable/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteTimetable = async (id: string) => {
    const res = await fetch(`http://localhost:3000/timetable/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};





export type TimetablePayload = {
    msg?: string;
    data: TimetableType;
    status: number;
  };
  
  export type TimetableType = {
    _id: string;
    username: string;
    phone: number;
    password: string;
  };