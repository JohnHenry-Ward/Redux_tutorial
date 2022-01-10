import './App.css';
import { Provider } from 'react-redux';

// Components
import Posts from './components/Posts';
import PostForm from './components/PostForm';

// Redux Store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr></hr>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;