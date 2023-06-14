import Fragment from "./components/basics/Fragment"
import First from "./components/basics/First"
import WithParameter from "./components/basics/WithParameter"
import Random from "./components/basics/Random"
import Card from "./components/layout/Card/Card"

function App() {
  return (
    <div className="container">
    <First />
    <div className="container__cards">
    <Card title="Parameter">
      
    <WithParameter title="Title!" subtitle="Subtitle!" score={8} />
    </Card>
    <Card title="Fragment" color="#437C90">
    <Fragment />
    </Card>

    <Card title="Random number">

    <Random min={1} max={3}/>
    </Card>
    </div>
    </div>
  )
}

export default App
