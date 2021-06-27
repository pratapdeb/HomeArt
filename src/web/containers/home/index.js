import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
import Grid from "@material-ui/core/Grid"
import {connect} from 'react-redux'
import Art from '../../components/art'

class Home extends React.Component {
    state = {
    }
    componentDidMount () {
    }
    
    render () {
      return (
        <Grid>
          <Art/>
        </Grid>
      )
    }
}

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = {
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
