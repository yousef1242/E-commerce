import { Productlist } from "./ProductList"


function Home(props){
    return(
        <Productlist moded={props.mode}/>
    )
}


export default Home