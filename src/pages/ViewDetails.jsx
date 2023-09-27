import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../components/Details";

const ViewDetails = () => {
    const [card, setCard] = useState()
    const cards = useLoaderData()
    const {id} =useParams()
    
    useEffect(()=>{
        const findCard =cards.find(item=> item.id === id)
        setCard(findCard);
    },[id,cards])
    console.log(card);
    return (
        <div>
            <Details card={card}/>
        </div>
    );
};

export default ViewDetails;