export const getNotifications = async () => {
  const res = await fetch(`http://localhost:3000/notifications`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotificationsPayload(res, data);
};

export const getNotificationsById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notifications/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotificationPayload(res, data);
};

export const createNotification = async () => {
  const res = await fetch(`http://localhost:3000/notifications`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotificationPayload(res, data);
};

export const updateNotification = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notifications/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotificationPayload(res, data);
};

export const deleteNotification = async (id: string) => {
  const res = await fetch(`http://localhost:3000/notifications/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return createNotificationPayload(res, data);
};

const createNotificationPayload = (res: Response, data: any): NotificationPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};
const createNotificationsPayload = (res: Response, data: any): NotificationsPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type NotificationPayload = {
  msg?: string;
  data: NotificationType;
  status: number;
};

export type NotificationsPayload = {
  msg?: string;
  data: NotificationType[];
  status: number;
};

export type NotificationType = {
  _id: string;
  notifname: string;
  notiftext: string;
};
