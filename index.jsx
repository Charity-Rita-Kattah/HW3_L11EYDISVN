function NavItem(props) {
    return (
    <a href="#" className={props.classItem}>
        {props.text}
    </a>
    );
}
function wallPaper(props) {
    return (
        <article className="wallPaper">
            <img src={props.img} alt="wallpaper #1" className="wallpaper"/>
        </article>
    );
}

function SearchForm(props) {
    return (
        <form>
            <input type="text" placeholder="Search" value={props.value} onChange={props.onChange} />
        </form>
    );
}


function App() {
const [navData, setNavData] = React.useState([
        {id: 1, text: "Hulk", classItem: ""},
        {id: 1, text: "Mavel", classItem: "logo is-active"},
        {id: 1, text: "Venom", classItem: ""},
    ]); 
}
const [wallData, setwallData] = React.useState([
    {id: 1, img: "img/marvel.jpg"},
    {id: 1, img: "img/hulk.jpg"},
    {id: 1, img: "img/venom.jpg"},
]);
const [value, setValue] = React.useState("");

function onChange(e) {
    setValue(e.target.value);

return (
    <React.Fragment>
                {/*Navbar */}
        <nav className="navbar">
            <div className="container">
                {navData.map(item => <NavItem key={item.id} text={item.text} classItem={item.classItem} />)}
            </div>
        </nav>

                {/*intro content */}
                <header className="header">
                    <div className="container">
                        <h1 className="title">Marvel's Fearless</h1>
                        <p className="subtitle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, sed quibusdam modi non, suscipit ipsa vitae excepturi ea cum possimus dignissimos fuga quas neque
                             nam mollitia necessitatibus magnam magni nulla?
                        </p>
                        <div className="search-bar">
                            <SearchForm value={value} onChange={onChange} />
                        </div>

                        {/* sample-wallPaper */}
                        <div className="sample-wallpaper">
                            {wallData.map(item =>  <wallPaper key={item.id} img={item.img} />)}
                        </div>
                    </div>
                </header>
    </React.Fragment>
);
}

ReactDom.render(<App />, document.getElementById("root"));

