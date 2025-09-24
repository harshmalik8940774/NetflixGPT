import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

const App = () => {
  return (
    // provide redux store to the application
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
