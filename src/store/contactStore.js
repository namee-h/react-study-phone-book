import { create } from "zustand";
import { persist } from "zustand/middleware"; //zustand 미들웨어(로컬스토리지와 비슷한 기능)
import { v4 as uuidv4 } from "uuid"; //랜덤 id 생성 npm install uuid

export const useContactStore = create(
  persist(
    (set) => ({
      contacts: [],
      addContact: (contact) =>
        // 연락처 추가 +
        set((state) => ({
          contacts: [...state.contacts, { ...contact, id: uuidv4() }],
        })),
      // 연락처 수정 ✍️
      updateContact: (updatedContact) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === updatedContact.id ? updatedContact : c
          ),
        })),
      // 연락처 삭제 🗑️
      deleteContact: (id) =>
        set((state) => ({
          contacts: state.contacts.filter((c) => c.id !== id),
        })),
      // 연락처 즐겨찾기 ⭐️
      toggleFavorite: (id) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === id ? { ...c, favorite: !c.favorite } : c
          ),
        })),
    }),
    {
      name: "contact-storage", //로컬스토리지 이름
    }
  )
);
