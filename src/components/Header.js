const Header = (props) => {
    const isLoggedIn = !!props.username;
   
    return (   <>
    {isLoggedIn &&
    <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
        <h1>{props.username}'s Chat Room</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div> }
     {/* !! ispred props.username vrijednost u boolean vrijednost */}
    {!isLoggedIn && 
    <div className="App-header">
        <div></div>
        <h1>Chat Application</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>}
      </>
)
}

export default Header;