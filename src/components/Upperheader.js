export default function Upperheader(){
    return (
        <nav className="nav-bar">
             {/* first box */}
            <div className="logo border">
                <img className="image" src="./image/amazon-logo.png"  />
                <span className="dot-in">.in</span>
            </div>
              {/* second box*/}
            <div className="person-location border">
           
                <p className="user-name"> <span className="location-icons"><i class="fa-solid fa-location-dot"></i></span> Shruti</p>
                <p className="address">Kalimahal,Varanasi</p>
            </div>
              {/* third box*/}
            <div className="input-text">
                <div className="head ">All</div>

                <input className="input" type="text" />

                <div className="tail ">
                   <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
             {/* forth box*/}
            <div className="icon-flag border">
                <i class="fa-solid fa-flag"></i>
            </div>
             {/* fifth box*/}
            <div className="sign-In border">
                <p className="first-para">Hello,Sign in</p>
                <p className="second-para">Account & Lists</p>
            </div>
             {/* sixth box*/}
            <div className="Order border">
                <p className="third-para">Return</p>
                <p className="fourth-para">& Orders</p>
            </div>
             {/* seventh box*/}
            <div className="cart border">
               <i class="fa-solid fa-cart-arrow-down"></i>
            </div>
           
        </nav>
    )
}