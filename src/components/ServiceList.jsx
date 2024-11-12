import { useEffect, useState } from "react";
import { allServices } from "../services/CommandeService";

export function ServiceList(){

    const [servicesData, setServicesData] = useState([])

    const fetch = async () => {
        const data = await allServices()
        setServicesData(()=> data)
    }

    useEffect(()=>{
        fetch();
    }, [])

    return (
        <div>
            {servicesData}
        </div>
    
    )
}