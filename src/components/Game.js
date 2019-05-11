import React from 'react';

 //call a every 1 sec
 window.setInterval(function(){
     //random number between 1 - 9
     var property = document.getElementById(String(Math.floor(Math.random() * 9) + 1));
     property.style.backgroundColor = "#00FF00";
     window.setTimeout(function(){
         property.style.backgroundColor = "";  
     },1000);
   }, 1000);

export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            highScore: 0
        };
    }
    scoreCount = (id)=>{
        document.getElementById(String(id)).style.backgroundColor == "rgb(0, 255, 0)" ?
        this.setState({count: this.state.count+1}) : this.setState({count: this.state.count-1});

        if(localStorage.getItem("hS") <= this.state.count){
            localStorage.setItem("hS", this.state.count+1);
            this.setState({highScore: this.state.count+1});
        }
    };
    
    componentDidMount(){
        const highScore = localStorage.getItem("hS");
        if(highScore){
            this.setState({highScore})
        }
    }

    render(){
        return(
            <div className="parent-container">
            <div className="child-container">
            <div>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(1)}} id = "1">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(2)}} id = "2">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(3)}} id = "3">  </button>
            </div>
            <div>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(4)}} id = "4">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(5)}} id = "5">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(6)}} id = "6">  </button>
            </div>
            <div>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(7)}} id = "7">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(8)}} id = "8">  </button>
                <button className="buttonTest" onClick={(e)=>{this.scoreCount(9)}} id = "9">  </button>
            </div>
            <p>{this.state.count}</p>
            <div>High Score: {this.state.highScore}</div>
        </div>
        </div>
        );
    }
}