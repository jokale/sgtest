import React from 'react';
import './App.css';

class App extends React.Component {
 
  state = {
  apiData: []
  }
 

  
  render() {   
    
    return (
      <div id="app"> 
        <center>
          <div id="hero-image">
        <img id="heroimage"src={this.state.apiData.acf?.hero_image.sizes.landscape} alt="group chat friendship" />
            </div>
              <div id="firstblock">
              <h5 id="category-name">{this.state.apiData.acf?.category.name.toUpperCase()}</h5>
              <h1 id="title">{this.state.apiData.title?.rendered}</h1> 
              <h5>By: <a href={this.state.apiData._embedded?.author[0].link}>{this.state.apiData._embedded?.author[0].name} </a></h5>
              <h6 id="date"> Date: {this.state.apiData.date_gmt}</h6>
          </div>
          <div id="standfirst">
        <h5 id="standfirst">{this.state.apiData.acf?.standfirst}</h5>
        </div>
        <div id="article">
       <p id="paragraph1">{this.state.apiData.acf?.widgets[0].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <img id="imagetwo"src={this.state.apiData.acf?.widgets[1].image.sizes.square} alt="female friendship affected by whatsapp and facebook messenger"/>
       <p id="paragraph2">{this.state.apiData.acf?.widgets[2].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <blockquote>{this.state.apiData.acf?.widgets[3].text}</blockquote>
       <p id="paragraph3">{this.state.apiData.acf?.widgets[4].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <img  id="imagethree"src={this.state.apiData.acf?.widgets[5].image.sizes.square} alt="group chat friendship" />
       <p id="paragraph4">{this.state.apiData.acf?.widgets[6].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <img id="imagefour"src={this.state.apiData.acf?.widgets[7].image.sizes.square} alt="group chat friendship" />
       <p id="paragraph5">{this.state.apiData.acf?.widgets[8].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <blockquote id="bqtwo">{this.state.apiData.acf?.widgets[9].text}</blockquote>
       <p id="paragraph6">{this.state.apiData.acf?.widgets[10].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
       <img id="imagefive" src={this.state.apiData.acf?.widgets[11].image.sizes.square} alt="group chat friendship" />
       <p>{this.state.apiData.acf?.widgets[12].paragraph.replace(/(<([^>]+)>)/gi, "")}</p>     
        </div>
       <p id="courtesy">{this.state.apiData.acf?.widgets[14].paragraph.replace(/(<([^>]+)>)/gi, "")}</p> 
  

       <hr class="rounded"/>

        <ul id="tags">
        <h5> ✖️{this.state.apiData.acf?.tags[0].name}
         ✖️{this.state.apiData.acf?.tags[1].name}
        ✖️{this.state.apiData.acf?.tags[2].name}
        ✖️{this.state.apiData.acf?.tags[3].name}
        ✖️{this.state.apiData.acf?.tags[4].name}
        ✖️{this.state.apiData.acf?.tags[5].name}
        ✖️{this.state.apiData.acf?.tags[6].name}
        ✖️{this.state.apiData.acf?.tags[7].name}</h5> 

        </ul>

        <h4> </h4></center>
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
      
  }
}
 
export default App