import axios from "axios";
import { create } from "zustand";

const useUserStore = create<{
  user: User | null;
  curriculums:any;
  setCurrculums: (curriculums:any) => void
  setUser: (user?:User) => Promise<void>;
}>((set) => ({
  user: null,
  curriculums:[],
  setCurrculums: (curriculums) => set({curriculums}),
  setUser: async (user) => {
    if(user){
      set({ user })
    }else{
      const token = localStorage.getItem('token');
      if(token){
        try {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/api/v1/user/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
  
          if (data.status === 'success') {
            // setUser(data.data.user)
            set({ user: data.data.user, curriculums: data.data.curriculums })
            // router.push('/dashboard/curriculum-dev?tab=dashboard')
          } else {
            // router.push('/login')

          }
        }
        catch (err) {
          // router.push('/login')
          console.log(err)
        }
      }
    }
  },
}));

export {
  useUserStore
}