// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    loader: true,
    teamBannerUrl: '',
    latestMatchDetails: '',
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonResponse = await response.json()

    const latestMatchDetails = {
      umpires: jsonResponse.latest_match_details.umpires,
      result: jsonResponse.latest_match_details.result,
      manOfTheMatch: jsonResponse.latest_match_details.man_of_the_match,
      id: jsonResponse.latest_match_details.id,
      date: jsonResponse.latest_match_details.date,
      venue: jsonResponse.latest_match_details.venue,
      competingTeam: jsonResponse.latest_match_details.competing_team,
      competingTeamLogo: jsonResponse.latest_match_details.competing_team_logo,
      firstInnings: jsonResponse.latest_match_details.first_innings,
      secondInnings: jsonResponse.latest_match_details.second_innings,
      matchStatus: jsonResponse.latest_match_details.match_status,
    }

    const recentMatches = jsonResponse.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: jsonResponse.team_banner_url,
      latestMatchDetails,
      recentMatches,
      loader: false,
    })
  }

  render() {
    const {loader, teamBannerUrl, latestMatchDetails, recentMatches} =
      this.state

    console.log(recentMatches)

    return (
      <div>
        {loader ? (
          <div testid="loader" className="loader-class">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamMatch-bg">
            <img className="banner-img" src={teamBannerUrl} alt="team banner" />
            <p>Latest Matches</p>
            <LatestMatch data={latestMatchDetails} />
            <ul className="ul-teammatches">
              {recentMatches.map(each => (
                <MatchCard data={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
