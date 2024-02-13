 import ReactDOM from 'react-dom/client';
 import App from './components/App';
 import './index.css'
// const App = <div className='logs'>
//     {/* each study log item */}
//     <div className='item'>
//         {/* date container */}
//         <div className='date'>
//             <div className='month'>
//                 Feburary
//             </div>
//             <div className='day'>
//                 12
//             </div>
//         </div>
//         {/* study content  */}
//         <div className='content'>
//             <h2 className='description'>study React</h2>
//             <div className='time'>40m</div>
//         </div>

//     </div>
// </div>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);