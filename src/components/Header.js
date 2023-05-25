const Header = (props) => {
  /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
  const isLoggedIn = !!props.username;
  return (
    <>
      {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
      {isLoggedIn && (
        <div className="App-header">
          <button className="sidebar-btn" onClick={props.toggleSidebar}>
            Sidebar
          </button>
          <h1>{props.username}'s Chat Room</h1>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
export default Header;
