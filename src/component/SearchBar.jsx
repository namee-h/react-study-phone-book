import { TextField } from '@mui/material'

export default function SearchBar({ search, setSearch }) {
  return (
    <TextField
      label="검색 (이름/번호)"
      variant="outlined"
      fullWidth
      size="small"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 2 }}
    />
  )
}
