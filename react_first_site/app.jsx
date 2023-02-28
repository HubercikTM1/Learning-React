function App (props) {
    const [worldNumber, setWorldNumber] = React.useState(props.worldNumber);
    return <div>
        <h1>Witaj Swiecie {worldNumber}</h1>
        <button onClick={
            function(){
                setWorldNumber(worldNumber+1)
            }}>zwieksz liczbe</button>
    </div>;
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<App worldNumber={5}/>);