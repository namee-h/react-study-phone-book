import { useParams, useNavigate } from 'react-router-dom'
import { useContactStore } from '../store/contactStore'
import {
  Typography,
  Button,
  Stack,
  Paper,
  IconButton
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

export default function ContactDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { contacts, deleteContact, toggleFavorite } = useContactStore()

  const contact = contacts.find((c) => c.id === id)

  if (!contact) {
    return <Typography>연락처를 찾을 수 없습니다.</Typography>
  }

  const handleDelete = () => {
    if (confirm('정말 삭제할까요?')) {
      deleteContact(contact.id)
      navigate('/')
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{contact.name}</Typography>
        <IconButton onClick={() => toggleFavorite(contact.id)}>
          {contact.favorite ? <StarIcon color="warning" /> : <StarBorderIcon />}
        </IconButton>
      </Stack>

      <Typography variant="body1" sx={{ mt: 1 }}>
        📞 {contact.phone}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate(`/edit/${contact.id}`)}
        >
          수정
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          삭제
        </Button>
      </Stack>
    </Paper>
  )
}
