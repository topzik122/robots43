import Robot from '../Robot/Robot'
import './RobotList.css'

export default function RobotList({ robots}) {
    <ul className ='cards'>
             {
             robots.map(robot =>(<Robot robot></Robot>) )
             }
    </ul>
}