import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(
//     React.createElement('button',{
//         disabled: true
//     }, 'Press me')
//     // document.getElementById('app')
// ); 

ReactDOM.render(<App/>, document.getElementById('app'));

    function tick() {
        const element = (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        );
        root.render(element);
    }

export default index