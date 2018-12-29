import React, { Component } from 'react';

class Mount extends Component {

    constructor(props){
        super(props);
        this.state = {
          data: 'Jordan Belfort'
        }
      }
      
    
      getData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
        }, 1000)
      }
    
      componentDidMount(){
        this.getData();
      }

      componentWillMount(){
        console.log('First this called');
      }
    
      render() {
        return(
          <div>
          {this.state.data}
        </div>
        )
      }
    }

export default Mount;