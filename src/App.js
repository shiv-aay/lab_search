import React from "react";
import Card from './Card';
import styles from './App.module.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query : '',
      isLoading : true,
      data : []
    };
  }
  componentDidMount(){
    fetch('https://0b57e2e4-4157-4ace-bc22-f8a38adf299f.mock.pstmn.io/lab_finder')
      .then(response => response.json())
      .then(res_data => this.setState({ data: res_data , isLoading: false}));
  }
  handleQueryChange = (e) => {
    this.setState({query : e.target.value});
  }
  isValidLab(lab){
    if(!lab.Pincode || !lab.City) return true; // change it to false if extra results have to be removed
    let pincode = lab.Pincode.toLowerCase();
    let city = lab.City.toLowerCase();
    let query = this.state.query.toLowerCase();
    return city.includes(query) || pincode.includes(query);
  }
  render(){
    const { isLoading, data } = this.state;
    return (<div>
      <input className={styles.queryBox} type="text" onChange={this.handleQueryChange} placeholder="Search for a laboratory..."/>
      {isLoading && <h2 className={styles.loader}>Data is loading...</h2>}
      {!isLoading &&
      <div>
        <ul className={styles.cards}>
        {data.filter(lab => this.isValidLab(lab)).map(filteredLab => (
          <li key={filteredLab.lab_id}>
            <Card labData={filteredLab} />
          </li>
          ))}
        </ul>
      </div>      
      }
    </div>);
  }
}

export default App;
