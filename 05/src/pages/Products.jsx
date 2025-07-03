import { Outlet } from "react-router-dom"

const products = () => {
  return (
    <div>
      This is product page.
      <Outlet/>
    </div>
  )
}

export default products