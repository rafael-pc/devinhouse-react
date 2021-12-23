import "./App.css";
import Contatos from "./components/Contatos";

function App() {
  return (
    // <div>Olá</div>
    <>
      <div className="container">
        <Contatos
          photo="https://pbs.twimg.com/profile_images/1489500286/joeb_phone_400x400.jpg"
          name="joe belfiore"
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        />
        <Contatos
          photo="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg"
          name="Bill Gates"
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        />
        <Contatos
          photo="https://pbs.twimg.com/profile_images/77846223/profile_400x400.jpg"
          name="Mark Zuckerberg"
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        />
        <Contatos
          photo="https://pbs.twimg.com/profile_images/323982494/marissa_new4_400x400.jpg"
          name="Marissa Mayer"
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        />
        <Contatos
          photo="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
          name="Sundar Pichai"
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        />
      </div>
    </>
  );
}

export default App;
