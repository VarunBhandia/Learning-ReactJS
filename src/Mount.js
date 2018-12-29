import React, { Component } from 'react';

class Mount extends Component {

    constructor(props){
        super(props);
        this.state = {
          data: 'Jordan Belfort'
        }
      }
      
      getData(){
        
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
       
      }
    
      componentDidMount(){
        console.log('componentDidMount');

        this.getData();
      }

      componentWillMount(){
        console.log('componentWillMount');
        this.getData();
      }
    
      render() {
        return(
          <div>
              {console.log('render')}
          {this.state.data}
        </div>
        )
      }
    }

export default Mount;