//naglowek
function Header() {
    return <h1>Piece wedzarnicze</h1>
}

//pojedynczy produkt
function Product(props){
    return ( 
        <div>
            <img src={props.imageUrl} height={200} width={200}/>
            <h2>{props.name}</h2>
            <div>{props.price}</div>
        </div>
    );
}

//lista productow
function ProductList(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        //pobranie z api
        fetch("http://192.168.1.153:3000/api/piece")
            .then(response => response.json())
            .then(setProducts);
    }, []);
    return (
        <div>
            <h2>Lista produktow</h2>
            <ul>
                {products.map(
                    product =>
                    <li key={product.id}><Product
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    /></li>
                )}
            </ul>
        </div>
    );
} 

function App(props) {
    return  <div>
                <Header />
                <ProductList />
            </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)
