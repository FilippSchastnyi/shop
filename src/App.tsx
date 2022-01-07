/*Components*/
import Drawer from '@mui/material/Drawer'
import {LinearProgress} from "@mui/material";
import Grid from '@mui/material/Grid'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/icons-material/Badge'
import StoreCard from './components/StoreCard/StoreCard'
/*Styles*/
import {Wrapper} from './App.styles'
/*Types*/
import {ICardItem} from './types'
/*Hooks*/
import {useQuery} from "react-query";


const getProducts = async (): Promise<ICardItem[]> => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
}

const App = () => {
    const {data, isLoading, error} = useQuery<ICardItem[]>(
        'products',
        getProducts)

    const getTotalItems = () => null
    const handleAddToCard = (clickedItems: ICardItem) => null
    const handleRemoveFromCard = () => null

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>

    return (
        <Wrapper>
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
        </Wrapper>
    );
}

export default App;
