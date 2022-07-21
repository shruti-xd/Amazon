export default function Maincomponents(){
    return(
        <div className="first-component">
            <div className="showing-image">
               <img className="item" src="./image/shirt1.webp" alt="" />
            </div>
         
        <div className="container">
          <h4 className="product-name">SHIRT THEORY</h4> 
          <p className="product-description">Cotton Full Sleeves Casual Shirt for Men II Premium Cotton Shirt</p>
          <p className="rating"></p>
          <div className="price">
          <p className="discount-price">1089</p>
           <p className="original-price">2099</p>
           <p className="offer">(20% Off)</p>
          </div>
          
          
           <button className="add-cart">Add to Cart</button>
        


          </div>
          
        </div>
    )
}