import { Link } from "react-router-dom";
import './header.css'
import htmling from '../images/logo.png'
//functional component(ka name hamsa first latter capital hota h)
function Header({ setInputState }) {
  // console.log(setInputState);
  console.log(setInputState.cart);
  function manageInput(e){
      let { value } = e.target
      // console.log(value);
      // setInputState(value)
      setInputState.setInputState(value)
  }
  return (
    <div className="header">
    <Link to="/">
      <img className="image"src={htmling} alt="logo" />
      </Link>
      <div className="search-bttn">
        <input type="text" placeholder="Search Your Product"  onChange={manageInput} />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className='cart'style={{Color:"blue",fontWeight:"bold"}} >
      <Link to ="/cartpage"><div>cart</div></Link>
      <div className='box'>{setInputState.cart.length}</div>
      </div>
      <Link to="/signin">
      <button className="singin">Signin</button>
      </Link>
      <Link to="/login">
      <button className="login">Login</button>
      </Link>
     
    </div>
  );
}
export default Header;


