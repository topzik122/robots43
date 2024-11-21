import './Counter.css'


export default function Counter(props){
    // const [count, setCount] = useState(3)
    // const handleClick = () => {
    //    setCount(count+1)
    // }
    return (
    <div className='counter'>
         { props.count }
    </div>)
}

