import React from "react";
import "./styles/css/Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	return (
		<nav>
			<ul className="links">
				<MenuIcon className="links__item" />
				<li className="links__item links__item--design">audiophile</li>
				<ShoppingCartOutlinedIcon className="links__item" />
			</ul>
		</nav>
	);
};

export default Header;
