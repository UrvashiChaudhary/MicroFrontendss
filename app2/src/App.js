import React from "react";

const App = ({ count }) => (
  <div>
    <h1>Counter: {count}</h1>
  </div>
);

App.defaultProps = { count: 0 }
export default App;