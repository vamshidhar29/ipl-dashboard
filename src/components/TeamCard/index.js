// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {data} = props
  const {id, name, teamImageUrl} = data

  return (
    <Link to={`/team-matches/${id}`} className="link-class-teamCard">
      <li className="li-teamcard">
        <img className="img-team-card" src={teamImageUrl} alt={name} />
        <p className="teamCard-text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
