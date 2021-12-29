import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="container">
        <Post
          photo="https://scontent.ffln10-1.fna.fbcdn.net/v/t39.30808-1/c5.0.160.160a/p160x160/242116663_4264592490255034_7472205682164374087_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=cTBEYGhDJlMAX-1ALgT&_nc_ht=scontent.ffln10-1.fna&oh=00_AT8311KHrkxhnZGKmsUYMyIY-qI7jHTYcivd9dwZ6TwNOw&oe=61CEFD5A"
          name="Rafael Pereira"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          post="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
          likes={["John doe", "25 others"]}
        ></Post>
      </div>
    </>
  );
}

export default App;
