export const getAchievements = async () => {
  const res = await fetch(`http://localhost:3000/achievements`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createAchievementsPayload(res, data);
};

export const getAchievementById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/achievements/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createAchievementPayload(res, data);
};

export const createAchievement = async () => {
  const res = await fetch(`http://localhost:3000/achievements`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createAchievementPayload(res, data);
};

export const updateAchievement = async (id: string) => {
  const res = await fetch(`http://localhost:3000/achievements/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createAchievementPayload(res, data);
};

export const deleteAchievement = async (id: string) => {
  const res = await fetch(`http://localhost:3000/achievements/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createAchievementPayload(res, data);
};

const createAchievementPayload = (res: Response, data: any): AchievementPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createAchievementsPayload = (res: Response, data: any): AchievementsPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type AchievementPayload = {
  msg?: string;
  data: AchievementType;
  status: number;
};

export type AchievementsPayload = {
  msg?: string;
  data: AchievementType[];
  status: number;
};

export type AchievementType = {
  _id: string;
  difficulty: string;
  description: string;
  status: string;
};
