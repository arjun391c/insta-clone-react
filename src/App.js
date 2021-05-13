import {
  Switch,
  Route,
} from 'react-router-dom'
import styled from 'styled-components'
//pages
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ReelsPage from './pages/ReelsPage'
import ActivityPage from './pages/ActivityPage'
import ProfilePage from './pages/ProfilePage'
//componets
import NavBar from './components/layout/NavBar'

const App = () => {
  return (
    <Wrapper>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/search" exact component={SearchPage}/>
          <Route path="/reels" exact component={ReelsPage}/>
          <Route path="/activity" exact component={ActivityPage}/>
          <Route path="/profile" exact component={ProfilePage}/>
        </Switch>
      </div>
      <NavBar/>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  color: #fff;
  background-color: #000;
  .container {
    margin-bottom: 7vh;
  }
` 