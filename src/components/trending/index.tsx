import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";

export interface FoodProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://172.30.64.1:3000/foods");
            const data = await response.json();
            setFoods(data);
        }

        getFoods();
    }, [])

    return (
        <FlatList
            data={foods}
            renderItem={ ({ item }) => <CardHorizontalFood food={item}/>}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}