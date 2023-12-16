import "./header.scss";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm"></span>
            <span className="headerTitleLg">Kahani</span>
            <span className="headerPara">Tales Unbound: Explore, Create, Connect.</span>
        </div>
        <img className="headerImg" src="./assets/bg.jpg"></img>
    </div>
  )
}
