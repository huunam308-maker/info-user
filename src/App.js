import './App.css';

function App() {
  const firstName = 'Nam';
  const user = {
    name: 'Nguyễn Hữu Nam',
    age: 18,
    class: 'C2506L',
  }

  return (
    <div className="App">
      <h2>{`Welcome, ${firstName}`}</h2>
      <p>Your information: </p>
      <p>Họ tên: {user.name}</p>
      <p>Tuổi: {user.age}</p>
      <p>Lớp: {user.class}</p>
    </div>
  );
}

export default App;
