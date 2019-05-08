import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/storage/actions/index'
import Product from './Product/Product'

export class ProductList extends Component {
  state = {
    searchString: ""
  }
  componentDidMount() {
    this.props.onFetchProducts()
  }
  onChangeHandler = (e) =>{
    this.setState({searchString: e.target.value})
  }

  render() {
    //console.log(this.props.productsList)
    const filtredBooks = this.props.productsList.filter(book=>{
      return book.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1
    })
    return (
      <div className="py-5 mt-5">
        <div className="container">
        <h1 className ="d-flex justify-content-center text-center mb-5">Znajdź swoją książkę!</h1>
        <h5 className ="d-flex justify-content-center text-center mb-5">Wpisz autora lub tytuł książki</h5>
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <div className="md-form mt-2 mx-auto d-flex justify-content-center" style ={{width:"20rem"}}>
                <input value = {this.state.searchString} onChange={this.onChangeHandler} className="form-control mb-3 text-center" type="text" placeholder="Napisz tytuł książki" aria-label="Search" />
              </div>
            </div>
          </div>

          <div className="row">
            {
             filtredBooks.map(items => {
                return <Product item={items} key={items.id} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    productsList: state.products.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
