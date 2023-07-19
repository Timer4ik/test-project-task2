import React from "react"
import MainPage from "./pages/MainPage"
import DefaultLayout from "./layouts/DefaultLayout"

const App = () => {
  return (
    <DefaultLayout>
      <MainPage />
    </DefaultLayout>
  )
}

export default App