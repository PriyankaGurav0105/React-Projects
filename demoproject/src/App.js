import logo from './logo.svg';
import './App.css';

// let name = "Priyanka Gurav";
let person ={
  name: "Priyanka Gurav",
  age: 25,
  occupation: "Software Developer"
}
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </nav>
      <div className="container">
        <h2>Website developed by {person.name} age {person.age} and is working as {person.occupation}.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Excepturi ducimus optio, amet ex, recusandae sit at totam earum tempore ut voluptates dignissimos 
          voluptatibus accusamus dicta accusantium quis, deserunt nesciunt maxime!</p>
      </div>

      </>
    
  );
}

export default App;
