import {useState} from 'react'
import {useQuery} from 'react-query'
/*Components*/
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import Badge from '@mui/icons-material/Badge'
/*Styles*/
import {Wrapper} from './App.styles'

const getProducts = async () =>{
    await (await fetch('https://fakestoreapi.com/products'))
}

const App = () => {
    return (
        <div className="App">
            work
        </div>
    );
}

export default App;
