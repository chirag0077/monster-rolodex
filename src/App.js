
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchfield: " ",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onsearchchange = (event) => {
//     const searchfield = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchfield };
//     });
//   };

//   render() {
//     const { monsters, searchfield } = this.state;
//     const { onsearchchange } = this;

//     const filteredmonsters = monsters.filter((monst) => {
//       return monst.name.toLowerCase().includes(searchfield);
//     });
const App=()=>{

  const [searchfield,setsearchfield]=useState('');
  const [monsters,setmonsters]=useState([]);
  const[title,setTitle]=useState("");
  const [filteredmonsters,setfilteredmonsters]=useState(monsters);

  console.log("render")

  useEffect(()=>{
    console.log("effect fired")
    fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((users) =>setmonsters(users))

  },[])

  useEffect(()=>{
    const newfilteredmonsters=monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchfield);
          });
          setfilteredmonsters(newfilteredmonsters);   
          console.log("effect is firing ")
        },[monsters,searchfield]) 
  

  const onsearchchange=(event)=>{
    const searchfieldstring = event.target.value.toLowerCase();
      setsearchfield(searchfieldstring)
      };
  const onTitleChange=(event)=>{
    const searchfieldstring = event.target.value.toLowerCase();
      setTitle(searchfieldstring)
      };

     
return (
      <div className="App" >
        <h1 className="app-title">{title}</h1>
        
        <SearchBox
          onChangeHandler={onsearchchange}
          placeholder="search monsters"
          className="monsters-search-box"
        
        />
        <br/>
        <SearchBox
          onChangeHandler={onTitleChange}
          placeholder="search title"
          className="title-search-box"
        
        />
        {<CardList monsters={filteredmonsters} /> }
      </div>
);
};
  export default App;