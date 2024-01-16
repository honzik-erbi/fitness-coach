export const getFriends = async () => {
  const res = await fetch(`http://localhost:3000/friends`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createFriendsPayload(res, data);
};

export const getFriendById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/friends/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createFriendPayload(res, data);
};

export const createFriend = async () => {
  const res = await fetch(`http://localhost:3000/friends`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createFriendPayload(res, data);
};

export const updateFriend = async (id: string) => {
  const res = await fetch(`http://localhost:3000/friends/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createFriendPayload(res, data);
};

export const deleteFriend = async (id: string) => {
  const res = await fetch(`http://localhost:3000/friends/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createFriendPayload(res, data);
};

const createFriendPayload = (res: Response, data: any): FriendPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createFriendsPayload = (res: Response, data: any): FriendsPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
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
};
