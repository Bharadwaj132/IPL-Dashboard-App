// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount = () => {
    this.gettingTeamMatches()
  }

  gettingTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const gettingBackgrounstyle = () => {
      switch (id) {
        case 'CSK':
          return 'csk-bg-style'
        case 'KKR':
          return 'kkr-bg-style '
        case 'RCB':
          return 'rcb-bg-style'
        case 'SRH':
          return 'srh-bg-style'
        case 'MI':
          return 'mi-bg-style'
        case 'DC':
          return 'dc-bg-style'
        case 'RR':
          return 'rr-bg-style'
        default:
          return 'pk-bg-style'
      }
    }
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchesData = await response.json()
    const teamBannerUrl = matchesData.team_banner_url
    const latestMatchDetails = matchesData.latest_match_details
    const recentMatches = matchesData.recent_matches

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
      gettingBackgrounstyle: gettingBackgrounstyle(),
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
      gettingBackgrounstyle,
    } = this.state
    console.log(recentMatches)
    return (
      <div className={`team-matches-background-card ${gettingBackgrounstyle}`}>
        {isLoading ? (
          <div className="loading-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img alt="team banner" className="team-image" src={teamBannerUrl} />
            <h1 className="latest-matches-heading-style">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <div className="recent-matches-container">
              {recentMatches.map(eachmatch => (
                <MatchCard eachmatch={eachmatch} key={eachmatch.id} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
