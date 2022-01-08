import {FC} from "react";
import Button from '@mui/material/Button'
import {ICardItem} from '../../../types'
import {Wrapper, Info, ButtonsGroup, Image} from './FlyoutOption.styles'

interface IFlyoutOptionProps {
    option: ICardItem;
    addToFlyout: (item: ICardItem) => void
    removeFromFlyout: (id: number) => void
}


const FlyoutOption: FC<IFlyoutOptionProps> = ({ option, addToFlyout, removeFromFlyout }) => {
    return (
        <Wrapper>
            <div>
                <h3>{option.title}</h3>
                <Info>
                    <p>Price: ${option.price}</p>
                    <p>Total: ${(option.amount * option.price).toFixed(2)}</p>
                </Info>
                <ButtonsGroup>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => removeFromFlyout(option.id)}
                    >
                        -
                    </Button>
                    <p>{option.amount}</p>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => addToFlyout(option)}
                    >
                        +
                    </Button>
                </ButtonsGroup>
            </div>
            <Image src={option.image} alt={option.title} />
        </Wrapper>
    )
}

export default FlyoutOption
