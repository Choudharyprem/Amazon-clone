import { Link } from "react-router-dom";



function Menu() {
  return (
    <div className="menubar">
      <div className="navbar1">
        <i class="fa fa-bars" aria-hidden="true">
          {" "}
          &nbsp;All
        </i>
        &nbsp;&nbsp;
      </div>
      <Link to="/shirts" style={{textDecoration:"none"}}>
      <div className="shirts">shirt's</div>
      </Link>
      <Link to="/pants" style={{textDecoration:"none"}}>
      <div className="pants">Pant's</div>
      </Link>
      <div className="subheading">
        <img src="/images/menubar.jpg" alt="" />
      </div>
    </div>
  );
}
export default Menu;


