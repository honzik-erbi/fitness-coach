export const getNotifications = async () => {
    const res = await fetch(`http://localhost:3000/notifications`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getNotificationsById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notifications/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createNotification = async () => {
    const res = await fetch(`http://localhost:3000/notifications`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateNotification = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notifications/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteNotification = async (id: string) => {
    const res = await fetch(`http://localhost:3000/notifications/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
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
    name: string;
  };