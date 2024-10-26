import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "@/firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Content {
    title: string;
    text: string;
}
interface Attraction {
    id: string;
    title: string;
    image: string;
    description: string;
    location: string;
    content: Content[];
    mapLink?: string;
}

interface AttractionState {
    attractions: Attraction[];
    loading: boolean;
    error: string | null;
}

const initialState: AttractionState = {
    attractions: [],
    loading: true,
    error: null,
};

// Định nghĩa actions cho reducer
type Action =
    | { type: "FETCH_SUCCESS"; payload: Attraction[] }
    | { type: "FETCH_ERROR"; payload: string };

// Tạo reducer cho context
const attractionReducer = (state: AttractionState, action: Action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, attractions: action.payload, loading: false };
        case "FETCH_ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

// Tạo Context
interface AttractionContextType {
    state: AttractionState;
    dispatch: React.Dispatch<Action>;
}

// Khởi tạo context với kiểu mặc định
const AttractionContext = createContext<AttractionContextType | undefined>(
    undefined
);

// Tạo Provider cho context
export const AttractionProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(attractionReducer, initialState);

    useEffect(() => {
        const fetchAttractions = async () => {
            try {
                const querySnapshot = await getDocs(
                    collection(db, "attractions")
                );
                const attractions: Attraction[] = [];
                querySnapshot.forEach((doc) => {
                    attractions.push({
                        id: doc.id,
                        ...doc.data(),
                    } as Attraction);
                });
                dispatch({ type: "FETCH_SUCCESS", payload: attractions });
            } catch (error) {
                dispatch({
                    type: "FETCH_ERROR",
                    payload: "Failed to fetch attractions",
                });
                console.error("Error fetching attractions:", error);
            }
        };

        fetchAttractions();
    }, []);

    return (
        <AttractionContext.Provider value={{ state, dispatch }}>
            {children}
        </AttractionContext.Provider>
    );
};

// Hook để sử dụng context
export const useAttraction = () => {
    const context = useContext(AttractionContext);
    if (!context) {
        throw new Error(
            "useAttraction must be used within an AttractionProvider"
        );
    }
    return context;
};
