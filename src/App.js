import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import PostContainer from './components/postContainter/postContainer';
import myData from './dummyData.js';

const instaData = myData;
console.log(instaData);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>Hello World</header>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
