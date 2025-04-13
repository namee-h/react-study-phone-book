import {
  TextField,
  Button,
  Stack,
  Typography,
  Paper
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useContactStore } from '../store/contactStore'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddEditContact() {
  const navigate = useNavigate()
  const { id } = useParams() // 수정모드 일때 id값 받아오기
  const { contacts, addContact, updateContact } = useContactStore()

  const isEdit = Boolean(id)
  const existing = contacts.find((c) => c.id === id)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // 수정 모드일 경우, 기존 연락처 정보로 초기값 설정
  useEffect(() => {
    if (isEdit && existing) {
      setName(existing.name)
      setPhone(existing.phone)
    }
  }, [isEdit, existing])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !phone) {
      alert('이름과 전화번호를 입력해주세요.')
      return
    }

    if (isEdit) {
      updateContact({ ...existing, name, phone })
    } else {
      addContact({ name, phone, favorite: false })
    }

    navigate('/')
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {isEdit ? '연락처 수정' : '연락처 추가'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <Stack direction="row" spacing={2} display='flex' justifyContent='space-between'>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate(-1)} // 이전 페이지로 돌아가기
            >
              취소
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {isEdit ? '수정 완료' : '저장'}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  )
}