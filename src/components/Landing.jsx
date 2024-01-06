import Left from "./Left"
import Right from "./Right"
import rightSplash from "../assets/rightSplash.png"


const Landing = () => {
  return (
    <div className="h-[90%] flex">
        <img className="w-60 absolute top-[50%] h-60 -left-[5%] leftitem" src={rightSplash} alt="" />
      <div className="left h-screen w-3/6">
        <Left/>
      </div>
      <div className="right h-screen w-3/6">
        <Right/>
      </div>
    </div>
  )
}

export default Landing
