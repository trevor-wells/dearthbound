import { useRouteError, Link } from "react-router-dom"

export default function ErrorScreen() {
    const error = useRouteError()
    console.error(error)

return (
  <div id="error-page">
    <h1>UH OH</h1>
    <Link to="/"><button>GO BACK HOME</button></Link>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
)
}
 