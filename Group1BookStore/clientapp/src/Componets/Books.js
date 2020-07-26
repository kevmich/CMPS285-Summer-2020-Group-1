import axios from "axios";
import './Books.css';
import { Media } from 'reactstrap';
import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';
import {getData} from '../actions/getAction';




class Books extends Component {

   

  constructor(props) {
      super(props);
      this.state = { posts: [] }
  }

  async componentDidMount() {
      try {
          const {data} = await axios.get(`api/Book/get-all`);
         // this.props.getData();
          this.setState({
              posts: data
          })
      } catch (err) {
          console.log(err.message)
      }

  }


  render() {

      return (
        <div className="container">
        {
            (this.state.posts && this.state.posts.length !== 0) ? (
                this.state.posts.map(post =>
                    <Media>
                        <Media body>
                            <Media heading>
                                {post.title}
                            </Media>
                            {post.author} <br/>
                            {post.price}  <br/>
                            <a  onClick={() => this.props.addBasket(post.title)} href = "javascript:void(0)">Add to Cart</a>
                        </Media>
                    </Media>
                )
            ) : (<div> <h1>Loading</h1> </div> )
        }
        </div>
      );
  }
}

export default connect(null,{addBasket}, {getData})(Books);