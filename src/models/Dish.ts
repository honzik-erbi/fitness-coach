export const getDishes = async () => {
    const res = await fetch(`http://localhost:3000/dishes`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getDishById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/dishes/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createDish = async () => {
    const res = await fetch(`http://localhost:3000/dishes`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateDish = async (id: string) => {
    const res = await fetch(`http://localhost:3000/dishes/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteDish = async (id: string) => {
    const res = await fetch(`http://localhost:3000/dishes/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
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
    upvote: string;
    downvote: string;
  };