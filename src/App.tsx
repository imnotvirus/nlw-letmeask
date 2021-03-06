import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./context/AuthContext";
import { Room } from "./pages/Room";
function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/rooms/new" exact component={NewRoom} />
					<Route path="/rooms/:id" exact component={Room} />
				</Switch>
			</AuthContextProvider>
			<Toaster position="top-right" reverseOrder={false} />
		</BrowserRouter>
	);
}

export default App;
