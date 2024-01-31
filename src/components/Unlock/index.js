import {useState} from 'react'
import {UnlockContainer, Paragraph, Image} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(true)
  console.log(lockStatus)

  const onChange = () => {
    setLockStatus((lockStatus) => !lockStatus)
  }
  return (
    <UnlockContainer>
      <Image
        src={
          lockStatus
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={lockStatus ? 'Lock' : 'Unlock'}
      />
      <Paragraph color={lockStatus ? "green" : "red"}>
        {lockStatus ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Paragraph>
      <button onClick={onChange}>{lockStatus ? 'Unlock' : 'Lock'}</button>
    </UnlockContainer>
  )
}
export default Unlock
