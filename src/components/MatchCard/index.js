// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = data

  const statusClass = () => {
    if (matchStatus === 'Lost') {
      return 'lose-class'
    } else {
      return 'won-class'
    }
  }
  return (
    <li className="li-card">
      <img
        className="match-card-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusClass()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
