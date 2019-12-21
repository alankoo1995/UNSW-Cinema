import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import { Layout, BackTop } from 'antd'

import { GlobalStyle } from './styles'
import Header from './common/header'
import Footer from './common/footer'
import NowShowing from './components/now-showing/index'
import ComingSoon from './components/coming-soon/index'
import Home from './components/home/index'
import Membership from './components/membership/index'
import ContactUs from './components/contact-us/index'
import AboutUs from './components/about-us/index'

// resolve the issue that react react wont scroll page to top when navigating
function _ScrollToTopOnMount() {
  useEffect(()=> {
    window.scroll(0, 0)
  })
  
  return null
}

const ScrollToTopOnMount = withRouter(_ScrollToTopOnMount)

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BackTop />
      <Layout style={{background: "#ecf0f1"}}>
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/now-showing" component={NowShowing}></Route>
            <Route exact path="/membership" component={Membership}></Route>
            <Route exact path="/contact-us" component={ContactUs}></Route>
            <Route exact path="/about-us" component={AboutUs}></Route>
            <Route exact path="/coming-soon" component={ComingSoon}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;
