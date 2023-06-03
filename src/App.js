import "./App.css";

export default function App() {
  console.log("Hi");
  const users=[
   {name: "Ajith", pic:"https://tse4.mm.bing.net/th?id=OIP.uZQdLXEgBEvR2OkcVVbBMQHaFj&pid=Api&P=0"},
   {name: "Kewal", pic:"https://tse2.mm.bing.net/th?id=OIP.1OxHm0-YJ86HSsNFBf3kOAHaHa&pid=Api&P=0"},
   {name:"Rayed", pic:"https://tse1.mm.bing.net/th?id=OIP.4cepzIUvZA4Zd2Gyqa3ajwHaJQ&pid=Api&P=0"},
   {name:"Deepa",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hyHdlTzu8r3kV3hbpACLLZF9f0cUZFXe0w&usqp=CAU"}];
  return (
    <div className="App">
      {/* <Msg name="Ajith"/>
      <Msg name="Kewal"/>
      <Msg name="Rayed"/> */}

    
      
      {users.map((ur)=>
       <Msg 
       name={ur.name}
       pic={ur.pic} />)}


    </div>
  );
}

// function Msg(props){
//   console.log(props)
//   return(
//     <div> 
//       <h1> 🙋🏻‍♂️,{props.name}!!!😊</h1>
//       </div>
//   )
// }


function Msg({name, pic}){
 
  return(
    <div> 
      <img className="user-pic" src={pic} alt="profile-pic"></img> 
      <h1 className="user-name"> 🙋🏻‍♂️,{name}!!!😊</h1>
      </div>
  )
}

