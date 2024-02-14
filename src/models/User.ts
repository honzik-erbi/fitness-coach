
export const signUp = async (formData: User) => {
    const res = await fetch("http://localhost:3000/api/v1/user", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        method: "POST"
    });
    const data = await res.json();
    return {
        status: res.status,
        msg: data.msg
    }
};








export type User = {
    id?: string,
    email?: string,
    firstname?:string,
    lastname?:string,
    banner?: string,
    profilePicture?: string,
    stats?: string,
    dateOfBirth?: Date,
    weight?: number,
    height?: number,
    password?: string,
    verified?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}