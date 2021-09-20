import React, { useState } from "react";

const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));

const styles = {
  main: {
    backgroundColor: "#61dafb",
    // backgroundImage: `url("https://media.istockphoto.com/photos/holiday-background-with-silver-and-blue-star-confetti-good-background-picture-id873559474")`
  },
  header: {
    textAlign: 'center',
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px 20% 0 20%",
  }
}

const App = () => {
  const [count, updateCount] = useState(0)
  return (
    <div style={styles.main}>
      <h1 style={styles.header}>Micro Frontend POC</h1>
      <div style={styles.container}>
        <div>
          <h2 style={styles.app1Header}>App 1</h2>
          <React.Suspense fallback="Loading Button">
            <App1 />
          </React.Suspense>
        </div>
        <div>
          <h2>App 2</h2>
          <React.Suspense fallback="Loading Button">
            <App2 count={count}/>
            <button onClick={() => updateCount(count + 1)}>Increase Count</button>
            <button onClick={() => updateCount(count - 1)}>Decrease Count</button>
          </React.Suspense>
        </div>
      </div>
    </div>
  )
};

export default App;