import NavigationHeader from "./NavigationHeader"
import Topbar from "./Topbar"

const Header = () => {
  return (
    <div className="w-full flex flex-col  justify-center items-center">
      <Topbar/>
      <NavigationHeader/>
    </div>
  )
}

export default Header
