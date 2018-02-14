import React, { Component } from 'react';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './animate/animate.css';

import Title from './components/title.js';
import ChapterOne from './components/chapter_one.js';
import ChapterTwo from './components/chapter_two.js';
import ChapterTwoB from './components/chapter_two_b.js';
import ChapterThree from './components/chapter_three.js';
import ChapterThreeB from './components/chapter_three_b.js';
import ChapterFour from './components/chapter_four.js';
import ChapterFourB from './components/chapter_four_b.js';

import NavButton from './components/nav_button.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     currentChapter: 1
    }

    this.nextChapter = this.nextChapter.bind(this);
  }

  render() {
    return (
      <div id="wrapper" className="wrap">
         { this.state.currentChapter === 1 ? <Title /> : null }
         { this.state.currentChapter === 2 ? <ChapterOne /> : null }
         { this.state.currentChapter === 3 ? <ChapterTwo /> : null }
         { this.state.currentChapter === 4 ? <ChapterTwoB /> : null }
         { this.state.currentChapter === 5 ? <ChapterThree /> : null }
         { this.state.currentChapter === 6 ? <ChapterFour /> : null }
         { this.state.currentChapter === 7 ? <ChapterThreeB /> : null }
         { this.state.currentChapter !== 7 ? <NavButton nextChapter={this.nextChapter} /> : null }
      </div>
    );
  }

  nextChapter() {
    this.setState({ currentChapter: this.state.currentChapter + 1 });
    if( this.state.currentChapter === 5 ) {
      document.getElementById("wrapper").classList.remove("wrap");
      document.getElementById("wrapper").classList.add("full-wrap");
    }
    if ( this.state.currentChapter === 6 ) {
      document.getElementById("wrapper").classList.remove("full-wrap");
      document.getElementById("wrapper").classList.add("wrap");
    }
  }
}

export default App;
