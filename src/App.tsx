import { Route, Routes } from "react-router-dom"

const App = () => {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </ThemeProvider>

  )
}

export default App
