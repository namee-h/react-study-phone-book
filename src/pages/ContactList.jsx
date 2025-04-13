import { useContactStore } from '../store/contactStore'
import ContactCard from '../component/ContactCard'
import SearchBar from '../component/SearchBar'
import { Typography } from '@mui/material'
import { useState } from 'react'

export default function ContactList() {
  const { contacts } = useContactStore() //zustand 연락처 상태 가져오기
  const [search, setSearch] = useState('')

  // 검색 필터 + 즐겨찾기 우선 정렬
  const filtered = contacts.filter((c) =>
    c.name.includes(search) || c.phone.includes(search)
  )
  const sortedContacts = [
    ...filtered.filter((c) => c.favorite),
    ...filtered.filter((c) => !c.favorite)
  ]

  return (
    <>
      <Typography variant="h5" gutterBottom>
        전체 연락처
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      {sortedContacts.length === 0 ? (
        <Typography>검색 결과가 없습니다.</Typography>
      ) : (
        sortedContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </>
  )
}
