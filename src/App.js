import './App.css';
import $ from 'jquery';
import React ,{ Component } from 'react';
import { render } from '@testing-library/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
 componentDidMount(){
  // $('button').click(function(){alert('Hello Saqib')});





  var min_ele = $(".min");
  var sec_ele = $(".sec");
  
  var min = 25;
  var sec = 0;
  
  function minute_change(){
      if(min == 0){
            min = "00";
      }else{
          min--;
      }
      min_ele.text(min);
  }
  function second_change(){
      if(min==25){
          min=24;
          min_ele.text(min);
      }
    if(sec>1){

          sec--;
      }
      else if(min==0){
          sec = "00";
      }else{
          sec = 60;
      }
      sec_ele.text(sec);
  }
  $(".pause").hide();
  var sec_start;
  var min_start;
  function start(){
      sec_start = setInterval(second_change,1000);
      min_start = setInterval(minute_change,60000);
      $(".play").hide();
      $(".pause").show();
  }

  function stop(){
      clearInterval(sec_start);
      clearInterval(min_start);
      $(".play").show();
      $(".pause").hide();
  }
  function restart(){
      sec = 0;
      min=25;
      sec_ele.text("00");
      min_ele.text(min);
      stop();
  }
   $(".play").click(start);
   $(".pause").click(stop);
   $(".restart").click(restart);
   
   var w = $('body').innerWidth();
   $('footer').css({'width':w+'px'});






 }
 render(){
  return (
    <div>
   <h1>Pomodoro Clock</h1>
    <center>
     <div className="time"> 
        
         <div className="min ">25</div> : 
         <div className="sec">00</div>
        
     </div>
    </center>
    <div className="button">
        <button className="play btn btn-success" >Play</button>
        <button className="pause btn btn-primary">Pause</button>
        <button className="restart btn btn-danger">Restart</button>
    </div>
    
    <center>
    <div className="event">
        <div className="work">
            <span className="h4">Work duration</span> <br/>
            <input type="number" value="20" className="form-control"/>
        </div> 
        <div className="break">
            <span className="h4">Break duration</span> <br/>
            <input type="number" value="5" className="form-control"/>
        </div>
    </div>
</center>

<footer>
    <div className="footer">
      Made with <span className="heart" style={{color:"rgb(231, 28, 62)"}}>  &#10084; </span> BY | <a href="http://mohdsaqib.epizy.com/" style={{color:"white"}}> SAQIB </a> <br/>
      +91 95480 97513 <br/>
      mohdsaqibnavodaya@gmail.com
    </div>
</footer>

    </div>
  );
}
}

export default App;

// style="color: white;"