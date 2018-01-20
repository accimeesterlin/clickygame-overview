import React from "react";
import data from "./data";
// Components

// [{name: Patrick, count: 0}] loop

// {
//   patrick:0,
//   esterling: 0
// }


// #2 container, class, smart, stateful
class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  change_data = (user) => {
    const name = user.name;
    if (this.state[name] <= 1) {
      this.setState({
        [name]: this.state[name] + 1 || 0
      });
    } else if (this.state[name] === 2) {
      this.setState({ [name]: 0 });
      console.log("Reset ");
    } else {
      this.setState({
        [name]: this.state[name] + 1 || 0
      });
    }

  };


  render() {
    console.log("State: ", this.state);
    // JSX
    return (
      <div>
        {data.map((el, index) => (
          <Displaydata { ...el } index={index} key={index} change_data={this.change_data} />
        ))}
      </div>
    );
  }

}

// {
//   name:"Patrick",
//   age:15,
//   id: 1
// },

// NO STATE,
// NO FUNCTION
// NO SIDE EFFECTS = NO AJAX CALLS      Redux


// Two ways
const Displaydata = ({ name, age, id, index, change_data }) => {

  let user = {
    name,
    age,
    id
  };

  return (
    <div key={index}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>ID: {id}</p>
      <button onClick={() => change_data(user)}> {name} </button>
    </div>
  );
};
export default App;

  // #3 higher order components (advances)


