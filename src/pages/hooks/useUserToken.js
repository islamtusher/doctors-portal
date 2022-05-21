import { useEffect, useState } from "react"

const useUserToken = (user) => {
    const [token, setToken] = useState('')
    
    useEffect(() => {
        const email = user?.email
        const updateUser = { email: email }

        if (email) {
            fetch(`https://guarded-reef-65351.herokuapp.com/user/${email}`,{
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data?.token)
                    localStorage.setItem('accessToken', data.token)
                })
        }
        
    }, [user])

    return [token]
}
export default useUserToken