import Services from './components/services/Services';
import NavBarMenu from './components/NavBarMenu';
import Introduction from './components/introduction/Introduction';
import DynamicForm from './components/DynamicForm/DynamicForm';

function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
