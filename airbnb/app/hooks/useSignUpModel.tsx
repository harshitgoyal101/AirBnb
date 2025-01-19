import { create } from "zustand";

interface SignUpModelStore {
    isOpen: boolean,
    open: () => void,
    close: () => void
}

const useSignUpModel = create<SignUpModelStore>((set) => ({
    isOpen: false,
    open: () => {set({isOpen: true})},
    close: () => {set({isOpen: false})},
}));

export default useSignUpModel;