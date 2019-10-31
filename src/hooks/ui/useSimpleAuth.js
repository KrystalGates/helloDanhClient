const useSimpleAuth = () => {
    const isAuthenticated = loggedIn =>
        loggedIn || localStorage.getItem("helloDanh_token") !== null

    const register = (userInfo, setIsLoggedIn) => {
        return fetch("http://127.0.0.1:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json()
            )
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem( "helloDanh_token", res.token )
                    setIsLoggedIn(true)
                }
            }).catch(error =>{
                window.alert(
                    "This email is already taken. Please use a different one.",
                  );
            })
    }

    const login = (credentials, setIsLoggedIn) => {
        return fetch("http://127.0.0.1:8000/login", {
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
                    window.alert(
                        "Incorrect email or password",
                      );
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
