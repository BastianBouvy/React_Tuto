import { Outlet } from "react-router-dom";
import MyNavBar from "../../components/MyNavBar";

function BaseLayout() {
	return (
		<>
			<header>
				<MyNavBar></MyNavBar>
			</header>
			<Outlet />
		</>
	);
}

export default BaseLayout;
