import React from 'react';
import './App.css';

class App extends React.Component {
 
  state = {
  apiData: []
  }
 
  render() {   
    
  console.log('api data is')
    return (
      <div>
        <center>{
        this.state.apiData.acf?.category.name}
        <img src={this.state.apiData.acf?.hero_image.sizes.square} alt="group chat friendship" />


        <h1 id="title">{this.state.apiData.title?.rendered}</h1>
        <h1 id="date">{this.state.apiData.date_gmt}</h1>
        <h5 id="standfirst">{this.state.apiData.acf?.standfirst}</h5>
        
       <p id="paragraph">{this.state.apiData.acf?.widgets[0].paragraph}</p> 
       <img src={this.state.apiData.acf?.widgets[1].image.sizes.square} alt="group chat friendship" />
       <p id="paragraph">{this.state.apiData.acf?.widgets[2].paragraph}</p> 
       <p id="pull quote">{this.state.apiData.acf?.widgets[3].text}</p> 
       <h6 >{this.state.apiData.acf?.widgets[4].paragraph}</h6> 
       <img src={this.state.apiData.acf?.widgets[5].image.sizes.square} alt="group chat friendship" />
       <h6 >{this.state.apiData.acf?.widgets[6].paragraph}</h6> 
       <img src={this.state.apiData.acf?.widgets[7].image.sizes.square} alt="group chat friendship" />
       <h6 >{this.state.apiData.acf?.widgets[8].paragraph}</h6> 
       <p id="pull quote">{this.state.apiData.acf?.widgets[9].text}</p> 
       <h6 >{this.state.apiData.acf?.widgets[10].paragraph}</h6> 
       <img src={this.state.apiData.acf?.widgets[11].image.sizes.square} alt="group chat friendship" />
       <h6 >{this.state.apiData.acf?.widgets[12].paragraph}</h6> 
       <h6 >{this.state.apiData.acf?.widgets[14].paragraph}</h6> 


        divider




        <ul id="tags">
          <li> {this.state.apiData.acf?.tags[0].name}</li>
          <li> {this.state.apiData.acf?.tags[1].name}</li>
          <li> {this.state.apiData.acf?.tags[2].name}</li>
          <li> {this.state.apiData.acf?.tags[3].name}</li>
          <li> {this.state.apiData.acf?.tags[4].name}</li>
          <li> {this.state.apiData.acf?.tags[5].name}</li>
          <li> {this.state.apiData.acf?.tags[6].name}</li>
          <li> {this.state.apiData.acf?.tags[7].name}</li>

        </ul>

  
        <h4>{this.state.apiData._embedded?.author[0].name} {this.state.apiData._embedded?.author[0].link} </h4></center>
      </div>
    )
  }
 
  componentDidMount() {
    fetch('http://www.mocky.io/v2/5dece3d333000052002b9037')
      .then(response => response.json())
      .then(data => {
        this.setState({
          apiData: data
        })
      })        
      console.log("component fetched data")
      
  }
}
 
export default App