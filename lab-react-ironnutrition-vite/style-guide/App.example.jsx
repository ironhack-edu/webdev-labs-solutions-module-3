// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider } from "antd";

function App() {
  return (
    <div className="App">
      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
