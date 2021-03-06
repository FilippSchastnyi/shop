import FlyoutOption from './FlyoutOption/FlyoutOption'
import {Wrapper} from './Flyout.styles'
import {ICardItem} from '../../types'
import {FC} from "react";

interface IFlyoutProps {
    flyoutOptions: ICardItem[];
    addAnOptionToFlyout: (item: ICardItem) => void
    removeAnOptionFromFlyout: (id: number) => void
}

const Flyout: FC<IFlyoutProps> = ({flyoutOptions, addAnOptionToFlyout, removeAnOptionFromFlyout}) => {

    const calculateTotalPrice = (flyoutOptions: ICardItem[]) => {
       return flyoutOptions.reduce((acc: number, item) => acc + item.amount * item.price, 0)
    }
    return (
        <Wrapper>
            <h2>Your Goods</h2>
            {!flyoutOptions.length && (<p>No goods here :(</p>)}
            {flyoutOptions.map((item) => (
                <FlyoutOption
                    key={item.id}
                    option={item}
                    addToFlyout={addAnOptionToFlyout}
                    removeFromFlyout={removeAnOptionFromFlyout}
                />
            ))}
            <h3>
                Total: ${calculateTotalPrice(flyoutOptions).toFixed(2)}
            </h3>
        </Wrapper>
    )
}

export default Flyout;