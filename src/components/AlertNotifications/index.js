// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success green" />
      <div className="container">
        <h1 className="success-text">Success</h1>
        <p className="success-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="success orange" />
      <div className="container">
        <h1 className="success-text orange">Warning </h1>
        <p className="success-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo className="success blue" />
      <div className="container">
        <h1 className="success-text blue">Info</h1>
        <p className="success-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="success red" />
      <div className="container">
        <h1 className="success-text red">Error</h1>
        <p className="success-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="bg-container">
      <div className="app-container">
        <h1>Alert Notifications</h1>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}

export default AlertNotifications
