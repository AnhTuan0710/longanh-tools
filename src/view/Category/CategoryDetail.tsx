import { useLocation } from "react-router-dom"

export default function CategoryDetail() {
  const location = useLocation()
  const record = location.state
  return (
    <div>CategoryDetail</div>
  )
}
