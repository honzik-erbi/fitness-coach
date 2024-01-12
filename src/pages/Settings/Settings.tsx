import { Link } from "react-router-dom";

export default function Settings() {

    return(
        <>
        <p>Settings</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}
export const getSettings = async () => {
    const res = await fetch(`http://localhost:3000/settings`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getSettingById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/settings/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createSetting = async () => {
    const res = await fetch(`http://localhost:3000/settings`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateNote = async (id: string) => {
    const res = await fetch(`http://localhost:3000/settings/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteSetting = async (id: string) => {
    const res = await fetch(`http://localhost:3000/settings/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};





export type SettingPayload = {
    msg?: string;
    data: SettingType;
    status: number;
  };

  export type SettingsPayload = {
    msg?: string;
    data: SettingType[];
    status: number;
  };
  
  export type SettingType = {
    _id: string;
    username: string;
    phone: number;
    password: string;
  };