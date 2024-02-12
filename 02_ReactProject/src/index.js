// src/index.js 是js的入口文件
// import reactDOM
import ReactDOM from 'react-dom/client';
// crate a jsx
const App = <div>
     <h1> This is a React Project</h1>
     <p>Finally I have a react proj</p>
     </div>;
// get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);