// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {umpires, result, date, venue} = latestMatchDetails
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  const competingTeam = latestMatchDetails.competing_team
  const competingTeamLogo = latestMatchDetails.competing_team_logo
  const firstInnings = latestMatchDetails.first_innings
  const secondInnings = latestMatchDetails.second_innings

  return (
    <div className="latest-match-background-card">
      <div className="left-side-card">
        <div className="left-side-card-details-small">
          <p className="latest-match-heading-style">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          className="logo-style-latest-match-small"
          src={competingTeamLogo}
        />
      </div>
      <img
        alt="latest match"
        className="logo-style-latest-match"
        src={competingTeamLogo}
      />
      <div className="right-side-card">
        <p className="sub-heading-style">First Innings</p>
        <p className="remaining-data-style">{firstInnings}</p>
        <p className="sub-heading-style">Second Innings</p>
        <p className="remaining-data-style">{secondInnings}</p>
        <p className="sub-heading-style">Man of the Match</p>
        <p className="remaining-data-style">{manOfTheMatch}</p>
        <p className="sub-heading-style">Umpires</p>
        <p className="remaining-data-style">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
