import axios from "axios";
import './Books.css';
import { Media } from 'reactstrap';
import React, {  Component } from 'react';



class Books extends Component {
  constructor(props) {
      super(props);
      this.state = { posts: [] }
  }

  async componentDidMount() {
      try {
          const {data} = await axios.get(`api/Book/get-all`);
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
                        <Media left href="#">
                            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                {post.title}
                            </Media>
                            {post.author} <br/>
                            {post.price}
                            
                        </Media>
                    </Media>
                )
            ) : (<div> <h1>Loading</h1> </div> )
        }
        </div>
      );
  }
}

export default Books;