import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./styles/css/Article.css";

const Articles = () => {
	return (
		<article className="article">
			<img
				src="https://img.search.brave.com/t19KuFsM_FjJllGG_oo8OuKhnY5wlDgnhe55YMSdoaU/rs:fit:1005:1005:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9oZWFkcGhvbmVz/L2hlYWRwaG9uZXNf/UE5HNzY0NS5wbmc"
				alt="title"
				className="article__image article--margin"
			/>
			<span className="article__name article--margin">HEADPHONES</span>
			<div className="article__shop article--margin">
				<span className="article__button">SHOP</span>
				<span className="article__icon">
					<ArrowForwardIosIcon />
				</span>
			</div>
		</article>
	);
};

export default Articles;
