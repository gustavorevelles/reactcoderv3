import './CartWidget.css'



const CartWidget = () => {
    return(

        <button type="button" className="btn btn-light"> 
            <img src="/images/cart.svg" alt="" style={{marginRight: 10, width:20}} />
            <span className="badge bg-secondary">0</span>
        </button>
       
    );
}

export default CartWidget