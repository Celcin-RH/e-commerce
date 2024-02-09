
import {create} from 'zustand';

// Définition de la structure d'un article dans le panier
interface CartItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  genre: string;
  quantity: number;
  loading: boolean;
}








// Définition d'une interface pour décrire la structure de l'état du store
interface YourStoreState {
  isBooleanValue: boolean;
  setBooleanValue: (newValue: boolean) => void;
}

// Création du store en utilisant la fonction create de Zustand
export const useStore = create<YourStoreState>((set) => ({
  // Définition d'une propriété booléenne dans l'état initial
  isBooleanValue: false,

  // Définition d'une fonction pour mettre à jour la propriété booléenne
  setBooleanValue: (newValue: boolean) => set({ isBooleanValue: newValue }),
}));



// ---- booleanDetail Product ---- //

interface BooleanDetail {
  isBoolDetail: boolean;
  setisBoolDetail: (newValue: boolean) => void;
  getAllDetail : (data:CartItem) => void,
  data:CartItem[]
}

export const useStoreDetailProduct = create<BooleanDetail>((set)=>({
  isBoolDetail:false,
  data : [],
  setisBoolDetail:(newValue:boolean) => set({isBoolDetail:newValue}),

    // Action pour ajouter un article au detail
    getAllDetail: (data) => {
      set((state) => ({
        ...state,
        data: [...state.data, data],
      }));
    },
}))










// ---- carte panier ---- //

// Définition du type pour la structure de l'état du panier
type CartState = {
  selectedItems: Record<number, CartItem>; // Utilisation de Record pour représenter un objet avec des clés de type number
};

// Définition du type pour les actions du panier
type CartActions = {
  addItemToCart: (id: number, data: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  reset: () => void;
};

// État initial du panier
const initialState: CartState = {
  selectedItems: {},
};

// Création du store du panier en utilisant la fonction create de Zustand
export const useStoreCart = create<CartState & CartActions>((set) => ({
  ...initialState,

  // Action pour ajouter un article au panier
  addItemToCart: (id, data) => {
    set((state) => {
      return {
        selectedItems: {
          ...state.selectedItems,
          [id]: { ...data, loading: true },
        },
      };
    });
  },

  // Action pour retirer un article du panier
  removeItemFromCart: (id) => {
    set((state) => {
      const newSelectedItems: Record<number, CartItem> = { ...state.selectedItems };
      delete newSelectedItems[id];
      return { selectedItems: newSelectedItems };
    });
  },

  // Action pour réinitialiser le panier à l'état initial
  reset: () => {
    set(() => ({ ...initialState }));
  },
}));
