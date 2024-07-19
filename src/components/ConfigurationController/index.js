// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configure-controller-container">
          <div className="responsive-controller-container">
            <h1 className="controller-title">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label htmlFor="content" className="label-content-title">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftnavbar"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="leftnavbar" className="label-content-title">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rightnavbar"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="rightnavbar" className="label-content-title">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
