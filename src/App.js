import data from "./data";

// const {
//   photographer,
//   src: { large },
// } = data[0];

function App() {
  return (
    <div>
      <h1 className="header">Image Gallery</h1>
      {data.map((person) => (
        <div className="App">
          <img src={person.src.large} alt="" />
          <p>{person.photographer}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
