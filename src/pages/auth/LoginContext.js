import React from "react"

const LoginContext = React.createContext({userInfo: null, setUserInfo: () => {}});

export default LoginContext;