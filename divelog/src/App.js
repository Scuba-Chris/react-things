import React from 'react';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import {ListOfDiveSites, DiveSiteForm} from './componets/Form';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      divesSites: [
          {id:1, siteName: 'Redondo'},
      ]
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(diveSiteData){
    // event.preventDefault();
    let newList = this.state.divesSites.concat(diveSiteData)
    this.setState({
      divesSites : newList
    })
  }

  // deleteHanger(divesSiteDelete){
  //   const newDiveSites = this.state.things.filter(things => thing.id !== divesSiteDelete.id);

  //   this.setState({
  //     things : newThings
  //   })
  // }


  render(){
    return (
      <>
        <div className="App">
          <Header count={this.state.divesSites.length} />
          <ListOfDiveSites divesSites={this.state.divesSites} />
          <DiveSiteForm onSubmit={this.submitHandler}/>
          <Footer />
        </div>
      </>
    );
  }
}
    
export default App;
