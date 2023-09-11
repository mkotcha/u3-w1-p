import Galleries from "./components/Galleries";
import PageFooter from "./components/PageFooter";
// import Profile from "./components/Profile";
// import Settings from "./components/Settings";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Galleries />
      {/* <Settings /> */}
      {/* <Profile /> */}
      <PageFooter />
    </>
  );
}

export default App;
