// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, teamImageUrl} = eachTeam
  return (
    <Link className="team-card" to={`/team-matches/${id}`}>
      <li className="li-team-card">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
