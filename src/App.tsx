/*Components*/
import Drawer from '@mui/material/Drawer'
import {LinearProgress} from "@mui/material";
import Grid from '@mui/material/Grid'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/material/Badge'
import StoreCard from './components/StoreCard/StoreCard'
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

    const getTotalItems = (items:ICardItem[]) => null
    const handleAddToCard = (clickedItems: ICardItem) => null
    const handleRemoveFromCard = () => null

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>

    return (
        <C.Wrapper>
            <Drawer anchor='right' open={isCardOpen} onClose={()=>setIsCardOpen(false)}>
                Card goes here
            </Drawer>
            <C.IcoButton onClick={()=> setIsCardOpen(true)}>
                <Badge badgeContent={getTotalItems(cardItems)}      color='error'>
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
