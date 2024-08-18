import { RESTAURANT_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantDetails = (resId) => {

    const [resInfo,setResInfo]= useState(null);
    //console.log("useRestaurantDetails called resinfo - "+resInfo)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        console.log("fetchData called")
        const res = await fetch(RESTAURANT_URL + resId);
        const json = await res.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantDetails