// Libraries
import { connect } from 'react-redux'
import React, { PropTypes, PureComponent } from 'react'
import { Link } from 'react-router'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Button from 'pages/shared/ButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import AcuityImage from 'pages/shared/AcuityImageComponent'

// Our styles
import './index.css'

class Home extends PureComponent {
  static propTypes = {
    user: PropTypes.object
  }

  render () {
    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              {
                this.props.user
                  ? <User userName={this.props.user.login} quote='A Lovely user..' />
                : ''
              }
              <SearchBar />
              <Link to='/upload'>
                <Button
                  backgroundColor='#673AB7'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                />
              </Link>
              <a href='browseImage'>
                <Button
                  backgroundColor='#F44336'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Popular'
                  disabled
                />
              </a>
              <a href='browseImage'>
                <Button
                  backgroundColor='#CDDC39'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Random'
                  disabled
                />
              </a>
              <Link to='/upload'>
                <Button
                  backgroundColor='#4CAF50'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Upload Image'
                />
              </Link>
              <a href='browse'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Browse'
                  disabled
                />
              </a>
              {/* <div className='small-12 medium-12 large-12 columns'>
                <div className='acuityDescription'>
                  <div className='spinningUnicorn'>
                    <img src='assets/mascot.svg' />
                  </div>
                </div>
              </div> */}
            </div>
          </LeftContainer>
          <RightContainer>
            <div className='row'>
              <div className='small-12 medium-8 medium-offset-2 large-6 large-offset-3 columns'>
                <div className='acuityDescriptionText'>
                  <h5>Acuity is the automatic open source image tagging website.
                    <br />Nogle af de billeder som ses på siden er stadig placeholder billeder. Her på forsiden vil vi gerne have populære billeder, dette kunne vi dog ikke nå at integrerer. Vi har dog en views key i vores database til at gøre det senere
                  </h5>
                </div>
              </div>
            </div>
            {/* This section is popular images or something along those lines, grid sizing will be changed later
                The sidebar should be changed to acocunt for some other things on the landing page, this is however not
                top priority right now.
              */}
            <div className='row'>
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
              <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            </div>
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.getIn(['auth', 'user'])
})

export default connect(mapStateToProps)(Home)
