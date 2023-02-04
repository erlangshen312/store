import React from "react";
import styled from "styled-components";
import { HiOutlineBars3BottomLeft, HiMagnifyingGlass, HiShoppingBag } from "react-icons/hi2";

import {ArticleLists} from "./components/ArticleLists";
import {Slider} from "./shared/Slider";
import {Row} from "./shared/_common";

const Container = styled.div`
  position: relative;
`;

const Header = styled(Row)`
	justify-content: space-between;
	padding: 22px 5px;
`;

const SubHeader = styled(Row)`
	position: sticky;
	top: 0;
	z-index: 3;
	padding: 4px 0;
	background-color: #fff;
	justify-content: space-evenly;
`;

const LeftSide = styled.div`
	& > * {
		margin-right: 20px;
	}
	`;
const Center = styled.div`
	font-size: 24px;
	font-weight: 800;
`;
const RightSide = styled(Row)`
	& > * {
		margin-left: 10px;
	}
`;


const Link = styled.a`
	text-decoration: none;
	font-weight: 700;
	font-size: 14px;
	line-height: 18px;
	display: flex;
	align-items: center;
	color: #000;
	padding: 10px 20px;
	cursor: pointer;
	
	&:hover {
		background-color: #00000017;
		border-radius: 20px;
	}	
`;


//TODO: будет приходить изначально все категории...
// Если в категории указано show/hide то будет показываться или скрываться
// Будет передоваться название категории дальше пропсом чтоб данные подтянулись по названию категории или по его id


const App = () => {
	const categories_data = [
		{
			id: 1,
			title: 'Новинки',
			isShow: true,
		},
		{
			id: 2,
			title: 'Одежда',
			isShow: false,
		},
		{
			id: 3,
			title: 'Ошейники',
			isShow: true,
		},
		{
			id: 4,
			title: 'Поводки',
			isShow: true,
		},
	]
	return (
		<Container>
			<Header>
				<LeftSide><HiOutlineBars3BottomLeft fill='#000' size={26} /></LeftSide>
				<Center>Хвостики Store</Center>
				<RightSide>
						<HiMagnifyingGlass fill='#000' size={26} />
						<HiShoppingBag fill='#000' size={26} />
				</RightSide>
			</Header>
			<SubHeader>
				{
					categories_data.map((category, ix) => <Link key={ix}>{category.title}</Link> )
				}
			</SubHeader>
			<Slider />
			{
				categories_data.filter((category, index) => category.isShow === true).map((category, ix) => <ArticleLists key={ix} category={category} />)
			}
		</Container>
	)
}

export { App }
