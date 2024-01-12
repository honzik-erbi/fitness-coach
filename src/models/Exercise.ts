export const getExercises = async () => {
    const res = await fetch(`http://localhost:3000/exercises`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getExerciseById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/exercises/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createExercise = async () => {
    const res = await fetch(`http://localhost:3000/exercises`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateExercise = async (id: string) => {
    const res = await fetch(`http://localhost:3000/exercises/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteExercise = async (id: string) => {
    const res = await fetch(`http://localhost:3000/exercises/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
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
    username: string;
    phone: number;
    password: string;
    
  };