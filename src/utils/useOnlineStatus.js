import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => { 
            console.log("setOnlineStatus(true)"); 
            setOnlineStatus(true) 
        });

        window.addEventListener("offline", () => { 
            console.log("setOnlineStatus(false)"); 
            setOnlineStatus(false) 
        });
    }, [])
    return onlineStatus;
}

export default useOnlineStatus;
