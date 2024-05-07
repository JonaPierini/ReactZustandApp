import { create } from 'zustand'

type ProfileStore = {
  name: string
  email: string
  //Se puede hacer aca (esa funcion que cambia) o desde el componente que llamo para usar este useProfileStore
  changeProfile: (name: string, email: string) => void
}

//El set => setea nuevos valores
//El get => trae el valor del estado actual
export const useProfileStore = create<ProfileStore>()((set, get) => ({
    name: 'Jona',
    email: 'jona@gmail.com',
    changeProfile: (name: string, email: string) => {
        set({name, email})
    }
  
}))
