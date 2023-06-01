import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";

import {HelloButton} from "@common/HelloButton";
import {Card} from "@common/Card";
import {HiArrowLongRight, HiArrowLongLeft} from "react-icons/hi2";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  line-height: 28px;
  font-size: 24px;
  font-weight: 800;
  color: #000;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArticleListsComponent = ({swiperRef, title, data}: any) => (
	<>
		<Header>
			<Title>{title}</Title>
			<Row>
				<HelloButton icon={<HiArrowLongLeft fill='#000' size={26}/>} onClick={() => swiperRef.current?.slidePrev()}/>
				<HelloButton icon={<HiArrowLongRight fill='#000' size={26}/>} onClick={() => swiperRef.current?.slideNext()}/>
				<HelloButton title='Все'/>
			</Row>
		</Header>
		<Swiper
			spaceBetween={20}
			slidesPerView={4}
			mousewheel
			onBeforeInit={(swiper) => swiperRef.current = swiper}
		>
			{data?.map((article: any, ix: number) =>
				<SwiperSlide key={ix}>
					<Card article={article}/>
				</SwiperSlide>
			)}
		</Swiper>
	</>
)

export {ArticleListsComponent}
