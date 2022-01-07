/*Components*/
import Button from '@mui/material/Button'
/*Types*/
import {FC} from "react";
import {ICardItem} from '../../types'
/*Styles*/
import * as C from './StoreCard.styles'


interface StoreCardProps {
    card: ICardItem;
    handleAddToCard: (clickedItem: ICardItem) => void;
}

const StoreCard: FC<StoreCardProps> = ({card, handleAddToCard}) => {
    return (
        <C.Wrapper>
            <C.Image src={card.image} alt={card.title}/>
            <C.Content>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <h3>{card.price}</h3>
            </C.Content>
            <Button onClick={() => {
                handleAddToCard(card)
            }}>
                Add to card
            </Button>
        </C.Wrapper>
    )
}

export default StoreCard;