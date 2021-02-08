import React from 'react'
import PropTypes from "prop-types"
import { render } from '@testing-library/react'

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("hi")
  }
  state = {
    count:0
  };
  add=() => {
    //this.setState({count:1})
    //this.setState({count: this.state.count +1})
    this.setState(current => ({count: current.count +1}))
  };
  delete = () => {
    //this.setState({count:-1})
    this.setState({count:this.state.count -1})
  };
  render() {
    return (
      <div>
        <h1>hello class {this.state.count} component</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.delete}>delete</button>
      </div>
    );
    
  }
}
/*function Food({fav,picture,rating}){
  return (
    <div>
      <h1>i like {fav}</h1>
      <h4>rating : {rating}/10</h4>
      <img src={picture} />
    </div>
  );
}*/

/*Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}*/

//const foodlike = [{id:1,name: "potato",image:"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",rating: 5},
//{id:2,name:"melon",image:"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",rating: 6}];

//function renderFood(dish){
//  return <Food fav={dish.name} picture={dish.image}/>
//}

/*function App() {
  return (
//    <div className="App">
//      {foodlike.map(renderFood)}
//    </div>
    <div>
      {foodlike.map(dish => (<Food rating={dish.rating} key={dish.id} fav={dish.name} picture={dish.image}/>))}
    </div>
  );
}*/

export default App;
