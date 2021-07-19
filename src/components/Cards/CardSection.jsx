import React from "react"
import { CardContent } from "./CardContent";
import Singlecard from "./SingleCard"

const CardSection = () => {
    return <>{CardContent.map((card, index) => {
        return (
            <Singlecard key={index} card={card}/>
        )
    })}</>;
}

export default CardSection