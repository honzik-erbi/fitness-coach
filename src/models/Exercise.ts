export const getExercises = async () => {
  const res = await fetch(`http://localhost:3000/exercises`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createExercisesPayload(res, data);
};

export const getExerciseById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/exercises/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createExercisePayload(res, data);
};

export const createExercise = async () => {
  const res = await fetch(`http://localhost:3000/exercises`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createExercisePayload(res, data);
};

export const updateExercise = async (id: string) => {
  const res = await fetch(`http://localhost:3000/exercises/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createExercisePayload(res, data);
};

export const deleteExercise = async (id: string) => {
  const res = await fetch(`http://localhost:3000/exercises/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createExercisePayload(res, data);
};

const createExercisePayload = (res: Response, data: any): ExercisePayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createExercisesPayload = (res: Response, data: any): ExercisesPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type ExercisePayload = {
  msg?: string;
  data: ExerciseType;
  status: number;
};

export type ExercisesPayload = {
  msg?: string;
  data: ExerciseType[];
  status: number;
};

export type ExerciseType = {
  _id: string;
};
