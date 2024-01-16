export const getDishes = async () => {
  const res = await fetch(`http://localhost:3000/dishes`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createDishesPayload(res, data);
};

export const getDishById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/dishes/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createDishPayload(res, data);
};

export const createDish = async () => {
  const res = await fetch(`http://localhost:3000/dishes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createDishPayload(res, data);
};

export const updateDish = async (id: string) => {
  const res = await fetch(`http://localhost:3000/dishes/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createDishPayload(res, data);
};

export const deleteDish = async (id: string) => {
  const res = await fetch(`http://localhost:3000/dishes/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createDishPayload(res, data);
};

const createDishPayload = (res: Response, data: any): DishPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createDishesPayload = (res: Response, data: any): DishesPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type DishPayload = {
  msg?: string;
  data: DishType;
  status: number;
};

export type DishesPayload = {
  msg?: string;
  data: DishType[];
  status: number;
};

export type DishType = {
  _id: string;
  name: string;
  image: string;
};
