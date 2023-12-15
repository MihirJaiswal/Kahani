import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import "./home.scss";

export default function Home() {
  return (
  <>
    <Header/>
    <div className="home">
      <Posts/>
      
    </div>
  </>
  )
}
