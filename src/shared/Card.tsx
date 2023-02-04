import styled from "styled-components";

import {NumberFormat} from "./NumberFormat";
import {Row} from "./_common";

const CardContent = styled.div`
	cursor: pointer;
	margin-right: 20px;
	width: 260px;
`;
const CardImageContent = styled.div`
	& > img {
		border-radius: 20px;
		width: 260px;
		height: 260px;
	}
`;
const CardBody = styled.div``;
const PriceContent = styled(Row)`
	& > * {
		margin-right: 10px;
	}
`;
const ActualPrice = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 21px;
	display: flex;
	align-items: center;
	color: #000000;
`;
const SellPrice = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 21px;
	display: flex;
	align-items: center;
	text-decoration-line: line-through;
	color: #81818B;
`;
const Percentage = styled.p`
	font-weight: 700;
	font-size: 12px;
	line-height: 17px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #FFFFFF;
	background: #000000;
	border-radius: 60px;
	padding: 5px 10px;
`;
const CardTitle = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
	color: #000000;
	margin: 0;
`;
const CardDescription = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	display: flex;
	align-items: center;
	color: #82828B;
`;


const Symbol = styled.span`
	cursor: '$';
`;

const Card = ({article}: any) => (
	<CardContent>
		<CardImageContent>
			<img alt={article?.title} src={article?.image}/>
		</CardImageContent>
		<CardBody>
			<PriceContent>
				<ActualPrice><NumberFormat price={article?.price}/></ActualPrice>
				<SellPrice><NumberFormat price={article?.sell_price}/></SellPrice>
				{article?.percentage && <Percentage>- {article?.percentage}%</Percentage>}
			</PriceContent>
			<CardTitle>{article?.title}</CardTitle>
			<CardDescription>{article?.description}</CardDescription>
		</CardBody>
	</CardContent>
);


export {Card}
