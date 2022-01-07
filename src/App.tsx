/*Components*/
import Drawer from '@mui/material/Drawer'
import {LinearProgress} from "@mui/material";
import Grid from '@mui/material/Grid'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/icons-material/Badge'
/*Styles*/
import {Wrapper} from './App.styles'
/*Types*/
import {ICartItem} from './types'
/*Hooks*/
import {useQuery} from "react-query";



const getProducts = async (): Promise<ICartItem[]> => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
}

const App = () => {
    const {data, isLoading, error} = useQuery<ICartItem[]>(
        'products',
        getProducts)

    const getTotalItems = () => null
    const handleAddToCart = () => null
    const handleRemoveFromCart = () => null

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>

        return (
            <div className="App">
                work
            </div>
        );
}

export default App;
