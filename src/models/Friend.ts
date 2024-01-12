export const getFriends = async () => {
    const res = await fetch(`http://localhost:3000/friends`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getFriendById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/friends/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createFriend = async () => {
    const res = await fetch(`http://localhost:3000/friends`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateFriend = async (id: string) => {
    const res = await fetch(`http://localhost:3000/friends/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteFriend = async (id: string) => {
    const res = await fetch(`http://localhost:3000/friends/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};





export type FriendPayload = {
    msg?: string;
    data: FriendType;
    status: number;
  };

  export type FriendsPayload = {
    msg?: string;
    data: FriendType[];
    status: number;
  };
  
  export type FriendType = {
    _id: string;
    name: string;
    image: string;
    bannerimg: string;
    status: string;
    bio: string;
    friendlist: string;
  };