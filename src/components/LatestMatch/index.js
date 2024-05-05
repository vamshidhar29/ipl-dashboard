// Write your code here
import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = data

  return (
    <div className="latest_match-bg-container">
      <div className="latest-match-left-container">
        <p className="heads-latest-match">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-match-right-container">
        <h1 className="heads-latest-match">First Innings</h1>
        <p>{firstInnings}</p>
        <h1 className="heads-latest-match">Second Innings</h1>
        <p>{secondInnings}</p>
        <h1 className="heads-latest-match">Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="heads-latest-match">Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
