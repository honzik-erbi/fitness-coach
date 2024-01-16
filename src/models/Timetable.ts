export const getTimetable = async () => {
  const res = await fetch(`http://localhost:3000/timetable`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createTimetablesPayload(res, data);
};

export const getTimetableById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/timetable/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createTimetablePayload(res, data);
};

export const createTimetable = async () => {
  const res = await fetch(`http://localhost:3000/timetable`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createTimetablePayload(res, data);
};

export const updateTimetable = async (id: string) => {
  const res = await fetch(`http://localhost:3000/timetable/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    }
  });
  const data = await res.json();
  return createTimetablePayload(res, data);
};

export const deleteTimetable = async (id: string) => {
  const res = await fetch(`http://localhost:3000/timetable/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createTimetablePayload(res, data);
};

const createTimetablePayload = (res: Response, data: any): TimetablePayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createTimetablesPayload = (res: Response, data: any): TimetablesPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type TimetablePayload = {
  msg?: string;
  data: TimetableType;
  status: number;
};

export type TimetablesPayload = {
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
