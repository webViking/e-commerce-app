import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/storage/actions/index'
import Product from './Product/Product'
import Pagination from '../Pagination/Pagination'

export class ProductList extends Component {
  state = {
    searchString: "",
    currentProducts: [], 
    currentPage: null, 
    totalPages: null,
  }
  componentDidMount() {
    this.props.onFetchProducts()
  }
  onChangeHandler = (e) => {
    this.setState({ searchString: e.target.value })
  }
  onPageChanged = (data) =>{
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = this.props.productsList.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
    
  }
  render() {
    const totalProducts = this.props.productsList.length

    const filtredBooks = this.state.currentProducts.filter(book => {
      return book.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1
    })
    console.log(this.props)
    return (
      <div className="py-5 mt-5">
        <div className="container">
          <h1 className="d-flex justify-content-center text-center mb-5">Znajdź swoją książkę!</h1>
          <h5 className="d-flex justify-content-center text-center mb-5">Wpisz autora lub tytuł książki</h5>
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <div className="md-form mt-2 mx-auto d-flex justify-content-center" style={{ width: "20rem" }}>
                <input value={this.state.searchString} onChange={this.onChangeHandler} className="form-control mb-5 text-center" type="text" placeholder="Napisz tytuł książki" aria-label="Search" />
              </div>
              
            </div>
          </div>
          <div>
          <div className="d-flex justify-content-center ">

          {this.props.page && this.props.page ? <Pagination pageNeighbours={1} totalRecords ={totalProducts} pageLimit ={6} onPageChanged={this.onPageChanged} /> :null}

          </div>
           
          </div>
          <div className="row">
            {
              filtredBooks.map((items) => {
      
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
    productsList: state.products.products,
    page: state.products.page,
    records_per_page: state.products.records_per_page,
    total_records: state.products.total_records
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
