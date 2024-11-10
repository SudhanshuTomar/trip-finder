import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { UsernameContext, CartContext, CartDispatchContext} from './utils/UserContext';
import { useReducer } from 'react';

function App() {
  // const [userName, setUserName] = useState("John Doe");
  const [cartState, dispatch] = useReducer(cartReducer,[]);
  
  return (
    <UsernameContext.Provider value="John Doe">
      <CartContext.Provider value={cartState}>
        <CartDispatchContext.Provider value={dispatch}>
          <div className="m-2 p-2">
          {console.log(cartState)}
            <Header />
            <Outlet />
          </div>
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </UsernameContext.Provider>
  );
}
function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      {
        return [...state, action.item];
        
      }
      
    case 'remove':
      return state.filter((item) => 
        (item?.dish?.info?.id || item?.card?.info?.id) !== action.id
      );
    default:
      return state;
  }
}

export default App;
