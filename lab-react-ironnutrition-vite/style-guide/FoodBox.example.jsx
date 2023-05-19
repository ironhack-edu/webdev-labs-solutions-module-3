// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from "antd";

function FoodBox() {
  return (
    <Col>
      <Card title={"FOOD_NAME"} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={"FOOD_IMAGE"} height={60} alt="food" />
        <p>Calories: FOOD_CALORIES</p>
        <p>Servings FOOD_SERVINGS</p>
        <p>
          <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS</b> kcal
        </p>
        <Button type="primary" onClick={() => {}}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
