export default async function userRegister(Name:string,Tel:string,userEmail:string, userPassword:string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            name: Name,
            tel: Tel,
            role:"user"
        }),
    })
    if(!response.ok){
        throw new Error("Failed to Register")
    }

    return await response.json()
}