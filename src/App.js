import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./contents/main/Home";
import About from "./contents/about/About";
import Disclosure from "./contents/disclosure/Disclosure";
import Notice from "./contents/notice/Notice";
import Qna from "./contents/qna/Qna";

import ReactCSStransitionGroup from "react-addons-css-transition-group";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Gnb from "./contents/common/gnb/Gnb";
import Footer from "./contents/common/footer/Footer";

class App extends Component {

  constructor()
  {
    super();

    this.state = {
      gnbIndex : 0
    };
  }

  componentDidMount()
  {

  }

  componentWillMount()
  {
    let url = window.location.pathname.substr( 1 );
    var index = -1;

    switch( url )
    {
      case ""           :  index = -1;    break;
      case "about"      :  index = 0;     break;
      case "disclosure" :  index = 1;     break;
      case "notice"     :  index = 2;     break;
      case "qna"        :  index = 3;     break;
    }

    this.setState({ gnbIndex : index });
  }

  render() {
    return (
      <div className="App">
        <Gnb gnbIndex={ this.state.gnbIndex } />

        <div className="contents">
          <Route 
            exact 
            path='/' 
            children = {({ match, ...rest }) => (
              <TransitionGroup component={ firstChild }>
                { match && <Home {...rest} />}
              </TransitionGroup>
            )}
          />
          
          <Route 
            exact 
            path='/about'
            children={ ({ match, ...rest }) => (
              <TransitionGroup component={ firstChild }>
                { match && <About {...rest} />}
              </TransitionGroup>
            )}
          />

          <Route 
            exact
            path='/disclosure'
            children={ ({ match, ...rest }) => (
              <TransitionGroup component={ firstChild }>
                { match && <Disclosure {...rest} />}
              </TransitionGroup>
            )}
          />
          
          <Route 
            exact
            path='/notice'
            children={ ({ match, ...rest }) => (
              <TransitionGroup component={ firstChild }>
                { match && <Notice {...rest} />}
              </TransitionGroup>
            )}
          />
          
          <Route 
            exact
            path='/qna'
            children={ ({ match, ...rest }) => (
              <TransitionGroup component={ firstChild }>
                { match && <Qna {...rest} />}
              </TransitionGroup>
            )}
          />
          
        </div>

        <Footer />
      </div>
    );
  }
}

const firstChild = props => {
  const childrenArray = React.Children.toArray( props.children );
  return childrenArray[ 0 ] || null;
}

export default App;
