import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantItem } from "./horizontal";

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://172.30.64.1:3000/restaurants");
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, [])

    return (
        <FlatList
            data={restaurants}
            renderItem={ ({ item }) => <RestaurantItem item={item}/>}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}