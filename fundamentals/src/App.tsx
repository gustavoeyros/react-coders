import Fragment from "./components/basics/Fragment"
import First from "./components/basics/First"
import WithParameter from "./components/basics/WithParameter"
import Random from "./components/basics/Random"
import Card from "./components/layout/Card/Card"
import Family from "./components/basics/Family"
import StudentsList from "./components/repetition/StudentsList"
import ProductsTable from "./components/repetition/ProductsTable"
import EvenOrOdd from "./components/conditional/EvenOrOdd"
import Mega from "./components/mega/Mega"

function App() {
  return (
    <div className="container">
    <First />
    <div className="container__cards">


    <Card title="Lottery">
      <Mega />
    </Card>

    <Card title="Even or odd">
      <EvenOrOdd number={20}/>
    </Card>

    <Card title="Products - Repetition">
      <ProductsTable />
    </Card>

    <Card title="Repetition">
      <StudentsList />
    </Card>

    <Card title="Parameter">
      
    <WithParameter title="Title!" subtitle="Subtitle!" score={8} />
    </Card>
    <Card title="Fragment" color="#437C90">
    <Fragment />
    </Card>

    <Card title="Family">
      <Family />
    </Card>

    <Card title="Random number">

    <Random min={1} max={3}/>
    </Card>
    </div>
    </div>
  )
}

export default App
