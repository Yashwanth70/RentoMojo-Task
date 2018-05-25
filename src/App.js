import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      prevVal:0,
      prevTime:0,
      count:0,
      data:[['.',',','!','1'],['a','b','c','2'],['d','e','f','3'],['g','h','i','4'],['j','k','l','5'],['m','n','o','6'],['p','q','r','s','7'],['t','u','v','8'],['w','x','y','z','9']]
    };
  }

  clickEvent(val){
    var now=new Date();
    if(this.state.prevTime==0){
      this.setState({value:(this.state.data)[val-1][this.state.count],prevTime:now,prevVal:val});
    }else if((val==0 || val =='*') || val=='#'){
      var concat=(this.state.value)+val;
      this.setState({value:concat,prevTime:now,prevVal:val})
    }else{
      var diff=Math.ceil((now-this.state.prevTime)/1000);
      //console.log(diff," ",val," ",this.state.count);
      if(diff <=2 && val==this.state.prevVal){
        if((val==7 || val==9) && (this.state.count)==4){
          this.setState({count:0},()=>{
            var concat=(this.state.value).slice(0,-1)+(this.state.data)[val-1][this.state.count];
            this.setState({value:concat,prevTime:now,prevVal:val})
          });
        }else if((val!=7 &&(this.state.count)==3) && (val!=9 &&(this.state.count)==3)){
          this.setState({count:0},()=>{
            var concat=(this.state.value).slice(0,-1)+(this.state.data)[val-1][this.state.count];
            this.setState({value:concat,prevTime:now,prevVal:val})
          });
        }else{
          this.setState({count:(this.state.count)+1},()=>{
          //console.log((this.state.data)[val-1][this.state.count])
          var concat=(this.state.value).slice(0,-1)+(this.state.data)[val-1][this.state.count];
          this.setState({value:concat,prevTime:now,prevVal:val})
        })
        }
      }else{
        this.setState({count:0},()=>{
          var concat=this.state.value+(this.state.data)[val-1][this.state.count];
          this.setState({value:concat,prevTime:now,prevVal:val});
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <table id="phone">
          <tr>
              <td colspan="3">
                  <input type="text" value={this.state.value} id="result" />
              </td>
          </tr>
          <tr>
              <td>
                  <button onClick={this.clickEvent.bind(this,1)} data-value="1" class="key">1
                      <span>. , !</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,2)} data-value="2" class="key">2
                      <span>a b c</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,3)} data-value="3" class="key">3
                      <span>d e f</span>
                  </button>
              </td>
          </tr>
          <tr>
              <td>
                  <button onClick={this.clickEvent.bind(this,4)} data-value="4" class="key">4
                      <span>g h i</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,5)} data-value="5" class="key">5
                      <span>j k l</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,6)} data-value="6" class="key">6
                      <span>m n o</span>
                  </button>
              </td>
          </tr>
          <tr>
              <td><button onClick={this.clickEvent.bind(this,7)} data-value="7" class="key">7
                  <span>p q r s</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,8)} data-value="8" class="key">8
                      <span>t u v</span>
                  </button>
              </td>
              <td>
                  <button onClick={this.clickEvent.bind(this,9)} data-value="9" class="key">9
                      <span>w x y z</span>
                  </button>
              </td>
          </tr>
          <tr>
              <td><button onClick={this.clickEvent.bind(this,'*')} data-value="*" class="key">*</button></td>
              <td><button onClick={this.clickEvent.bind(this,0)} data-value="0" class="key">0</button></td>
              <td><button onClick={this.clickEvent.bind(this,'#')} data-value="#" class="key">#</button></td>
          </tr>
      </table>
      </div>
    );
  }
}

export default App;
