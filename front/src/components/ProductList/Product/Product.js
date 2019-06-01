import React from 'react'
import {connect} from 'react-redux'
import *  as actions from '../../../redux/storage/actions/index'
const Product = (props) => {
    const { author, cover_url, currency, pages, price, title } = props.item
    return (
        <div className="col-10 mx-auto col-md-5 col-lg-4 my-3">
            <div className="container">
                <div className="card">
                <div className="img-container p-5">
                    <img src={cover_url} className="card-img-top img-fluid" alt="" />
                </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Autor/Autorzy: {author}</h6>
                        <p className ="card-text">Liczba stron: {pages}</p>
                        <p className ="card-text">Cena: {price} {" "} {currency} </p>
                        <button className= "btn btn-warning  text-white mr-2 mt-2" onClick ={props.onAddedToCart.bind(this,props.item)}>Dodaj do kosza</button>
                        <button className= "btn btn-primary mt-2">Zamów</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        onAddedToCart: (addedParticularBook) => dispatch(actions.addToCartSuccess(addedParticularBook))
    }
}
export default connect(null, mapDispatchToProps)(Product)