import './App.css';
import Tabela from "./components/Tabela"

function App() {
  return (
    <div className="container">
      <Tabela
      title="Minha tabela"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam neque sequi minus odio, quam, sed perferendis quibusdam veritatis, sit accusamus dolorum at possimus! Voluptatem quae repellat natus nemo porro."
      columns={['Event', 'Device Id', 'Comment']}
      data={
        [
          {
            event: 'valor do evento',
            deviceId: 'valor do deviceId',
            comment: 'valor do comment'
          },
          {
            event: 'valor do evento',
            deviceId: 'valor do deviceId',
            comment: 'valor do comment'
          }
        ]
      } 
      ></Tabela>
    </div>
  );
}

export default App;
