// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {loader: true, list: []}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonResponse = await response.json()
    const sortList = jsonResponse.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({list: sortList, loader: false})
  }

  render() {
    const {loader, list} = this.state

    return (
      <div>
        {loader ? (
          <div testid="loader" className="background-home">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-home">
            <div className="home-logo-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="home-head-ipl-text">IPL Dashboard</h1>
            </div>
            <ul className="ul-home">
              {list.map(each => (
                <TeamCard data={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
