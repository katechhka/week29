import React from "react";


 class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
        minutes:0,
        seconds:0
    } 
    this.stop=this.stop.bind(this);  
 }

 componentDidMount(){
   this.getTime();
 }

 shouldComponentUpdate(nextProps, nextState){
    if(nextState.timerId!==this.state.timerId)
        return false;
    return true;
 }

 getTime(){
    let timerJSON=localStorage.getItem("timer");
    let timer=JSON.parse(timerJSON);
    this.setState(
        {
            minutes: Number(timer.minutes),
            seconds: Number(timer.seconds)
        }
    );
 }
 start =() =>{
    let scope=this;
    let timerId=setInterval(function(){
        scope.setState({
            seconds:scope.state.seconds+1
        }
        )
    },1000);
    this.setState({timerId:timerId});
 }

 stop(){
    clearInterval(this.state.timerId);
 }
    render(){
        return(
            <div>
                <p>Timer info: {this.state.minutes}:{this.state.seconds}</p>
                <br>
                </br>
                <div>
                    <button onClick={this.stop}>stop</button>
                    <button onClick={this.start}>start</button>
                </div>
            </div>
        )
    }
 }

 export default Timer;