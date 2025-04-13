import { Card, CardContent, Typography, IconButton, Avatar } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useContactStore } from '../store/contactStore'
import { useNavigate } from 'react-router-dom'

export default function ContactCard({ contact }) {
  const { toggleFavorite } = useContactStore()
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
        px: 2,
      }}
      onClick={() => navigate(`/contact/${contact.id}`)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar>{contact.name.charAt(0)}</Avatar>
        <CardContent sx={{ padding: '12px 0' }}>
          <Typography variant="subtitle1">{contact.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {contact.phone}
          </Typography>
        </CardContent>
      </div>

      <IconButton
        onClick={(e) => {
          e.stopPropagation() // 상세 페이지 이동 막기
          toggleFavorite(contact.id)
        }}
      >
        {contact.favorite ? <StarIcon color="warning" /> : <StarBorderIcon />}
      </IconButton>
    </Card>
  )
}
