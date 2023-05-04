import { TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        {new Array(50).fill(null).map((_, idx) => {
          return <TextField key={idx} id={`idx-${idx}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
