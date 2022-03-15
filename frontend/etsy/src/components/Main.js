import React, { useContext } from "react"
import { GlobalContext } from "../context/Provider"
import { useHistory } from "react-router-dom"
import Dashboard from "./Dashboard"

const Main = () => {
  const { authState } = useContext(GlobalContext)
  console.log(authState)
  return <Dashboard />
}

export default Main
