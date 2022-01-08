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
    return (
        <Wrapper>
            <h2>Your Goods</h2>
            {!flyoutOptions.length && (<p>No goods here :(</p>)}
            {flyoutOptions.map((item) => (
                <FlyoutOption key={item.id}/>
            ))}
        </Wrapper>
    )
}

export default Flyout;