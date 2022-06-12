
import {Route, Routes, Navigate,BrowserRouter} from'react-router-dom'
import Main from "./components/Watchlist";
import Signup from "./components/Signup";
import Header from './components/Header'
import Login from "./components/Login";
import Add from "./components/Add";
import Watched from './components/Watched';
import {GlobalProvider} from "./context/Globalstate"
import './App.css'

function App() {
const user = localStorage.getItem("token");
return (
	<GlobalProvider>
	<Header></Header>
	<Routes>
			{user && 
				<Route path="/" exact element={<Main />} />
				
			}
			<Route path="/add" exact element={<Add/>}/>
			<Route path="/watched" exact elemnt={<Watched/>}/>
			

			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
	</Routes>
	</GlobalProvider>
);
}

export default App;
