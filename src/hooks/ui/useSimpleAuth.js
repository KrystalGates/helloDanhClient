//Handles Authentication, Register, Login and Logout
const useSimpleAuth = () => {
    const isAuthenticated = loggedIn =>
        loggedIn || localStorage.getItem("helloDanh_token") !== null

    const register = (userInfo, setIsLoggedIn) => {
        return fetch("http://api.hellodanh.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem( "helloDanh_token", res.token )
                    setIsLoggedIn(true)
                }
            })
    }

    const login = (credentials, setIsLoggedIn) => {
        return fetch("http://api.hellodanh.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "helloDanh_token", res.token )
                    setIsLoggedIn(true)
                }
                else{
                    window.alert("Your email or password is invalid. Please try again.")
                }
            })
    }

    const logout = setIsLoggedIn => {
        setIsLoggedIn(false)
        localStorage.removeItem("helloDanh_token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth
