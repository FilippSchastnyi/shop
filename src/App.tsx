/*Components*/
/*Styles*/
/*Types*/
import {ICartItem} from './types'
import {useQuery} from "react-query";


const getProducts = async (): Promise<ICartItem[]> => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
}

const App = () => {

    const {data, isLoading, error} = useQuery<ICartItem[]>(
        'products',
        getProducts)

    return (
        <div className="App">
            work
        </div>
    );
}

export default App;
