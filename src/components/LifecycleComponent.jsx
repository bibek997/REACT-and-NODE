import React, {Component} from "react";

class LifecycleComponent extends Component {
constructor(props) {
super(props);
this.state = {
count: 0,
};
}

componentDidMount() {
console.log('Component Did Mount');
}

componentDidUpdate(prevProps, prevState) {
if (prevState.count !== this.state.count) {
console.log('Component Did Update');
}
}

componentWillUnmount() {
console.log('Component Will unmount');
}

incrementCount = () => {

this.setState({ count: this.state.count + 1 });
};

render() {
return(
    <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
    </div>
)
}
}

export default LifecycleComponent;