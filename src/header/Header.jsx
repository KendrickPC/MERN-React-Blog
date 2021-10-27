import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">Soccer Cards Blog</span>
        <span className="headerTitleLarge">FÚTBOL IS LIFE</span>
      </div>
      <img className="headerImage" src="https://thepostsportsbar.com/wp-content/uploads/2012/09/soccer-field-background.jpg" alt="Soccer field" />
    </div>
  )
}
