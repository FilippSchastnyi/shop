/*Components*/
import Drawer from '@mui/material/Drawer'
import {LinearProgress} from "@mui/material";
import Grid from '@mui/material/Grid'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/material/Badge'
import StoreCard from './components/StoreCard/StoreCard'
import Flyout from './components/Flyout/Flyout'
/*Styles*/
import * as C from './App.styles'
/*Types*/
import {ICardItem} from './types'
/*Hooks*/
import {useQuery} from "react-query";
import {useState} from "react"


const getProducts = async (): Promise<ICardItem[]> => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
}

const App = () => {
    const [isCardOpen, setIsCardOpen] = useState<boolean>(false)
    const [cardItems, setCardItems] = useState<ICardItem[]>([])
    const {data, isLoading, error} = useQuery<ICardItem[]>(
        'products',
        getProducts)

    const getTotalItems = (items: ICardItem[]) =>
        items.reduce((acc: number, item) => acc + item.amount, 0);

    const handleAddToCard = (item: ICardItem) => {
        const isItemInBucket = cardItems.find(i => i.id === item.id)
        if (isItemInBucket) {
            setCardItems(cardItems.map(i =>
                i.id === item.id
                    ? {...i, amount: i.amount + 1}
                    : i
            ))
        } else setCardItems([...cardItems, {...item, amount: 1}])
    }

    const handleRemoveFromCard = (id: number) => {
        setCardItems(
            cardItems.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return acc;
                    return [...acc, {...item, amount: item.amount - 1}];
                } else return [...acc, item]
            }, [] as ICardItem[])
        )
    }

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>

    return (
        <C.Wrapper>
            <Drawer anchor='right' open={isCardOpen} onClose={() => setIsCardOpen(false)}>
                <Flyout
                    flyoutOptions={cardItems}
                    addAnOptionToFlyout={handleAddToCard}
                    removeAnOptionFromFlyout={handleRemoveFromCard}
                />
            </Drawer>
            <C.IcoButton onClick={() => setIsCardOpen(true)}>
                <Badge badgeContent={getTotalItems(cardItems)} color='error'>
                    <AddShoppingCart/>
                </Badge>
            </C.IcoButton>
            <Grid container spacing={3}>
                {data?.map((cardItem) => (
                    <Grid item
                          key={cardItem.id}
                          xs={12}
                          sm={4}>
                        <StoreCard card={cardItem}
                                   handleAddToCard={handleAddToCard}/>
                    </Grid>
                ))}
            </Grid>
        </C.Wrapper>
    );
}

export default App;
