// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount = () => {
    this.gettingTeamsList()
  }

  gettingTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()

    const formattedData = teamsData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsList: formattedData.sort(() => Math.random() - 0.5),
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            className="ipl-logo-style"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading-style">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loading-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-container">
            {teamsList.map(eachTeam => (
              <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
