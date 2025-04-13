// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import ContactList from './pages/ContactList'
import ContactDetail from './pages/ContactDetail'
import AddEditContact from './pages/AddEditContact'
import Header from './component/Header'
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material'
import { useThemeStore } from './store/themeStore'

function App() {
  const { mode } = useThemeStore()

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/add" element={<AddEditContact />} />
          <Route path="/edit/:id" element={<AddEditContact />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
