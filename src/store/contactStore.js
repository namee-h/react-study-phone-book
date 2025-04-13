import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useContactStore = create(
  persist(
    (set) => ({
      contacts: [],
      addContact: (contact) =>
        set((state) => ({
          contacts: [...state.contacts, { ...contact, id: uuidv4() }],
        })),
      updateContact: (updatedContact) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === updatedContact.id ? updatedContact : c
          ),
        })),
      deleteContact: (id) =>
        set((state) => ({
          contacts: state.contacts.filter((c) => c.id !== id),
        })),
      toggleFavorite: (id) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === id ? { ...c, favorite: !c.favorite } : c
          ),
        })),
    }),
    {
      name: "contact-storage",
    }
  )
);
