// src/component/Header.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../store/themeStore'

export default function Header() {
  const navigate = useNavigate()
  const { mode, toggleMode } = useThemeStore()


  return (
    <AppBar position="static" color="primary" sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{cursor: 'pointer'}} onClick={()=> navigate('/')}>
          연락처
        </Typography>
        <div>
          <Switch checked={mode === 'dark'} onChange={toggleMode} />
          <IconButton color="inherit" onClick={() => navigate('/add')}>
            <AddIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
