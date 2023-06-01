import styled from "styled-components";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Image = styled.div`
	width: 100%;
	height: 410px;
	background-image: linear-gradient(
    to left, rgb(255 255 0 / 0%), rgb(0 0 0 / 51%)
  ), url('https://storage.my2can.com/sklimages/user_7250/eshop_images/c8080ad81c311e883e3ae676210b48bb.jpeg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 20px;
	position: relative;

`;

const Wrapper = styled.div`
	position: relative;
`

const Information = styled.div`
	
	position: absolute;
	left: 50px;
	top: 50px;
	color: #fff;
	
	display: flex;
	flex-direction: column;
	width: 40%;
	
	& > h1 {
	  font-weight: 700;
		font-size: 52px;
		line-height: 58px;
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	
	& > p {
		font-weight: 500;
		font-size: 18px;
		line-height: 26px;
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: #fff;
	font-size: 14px;
	margin-top: 20px;
	font-weight: bold;
	
`;


const Banner = () => (
	<Wrapper>
		<Image alt="banner title" />
		<Information>
			<h1>Хвостики Store</h1>
			<p>Хотите такой же магазин? Регистрируйтесь по ссылке выше!</p>
			<Link href='#' >Прочитать</Link>
		</Information>
	</Wrapper>
)

const Slider = () => (
	<Swiper
		spaceBetween={30}
		centeredSlides={true}
		autoplay={{
			delay: 5500,
			disableOnInteraction: false,
		}}
		pagination={{
			clickable: true,
			dynamicBullets: true,
		}}
		navigation={false}
		modules={[Autoplay, Pagination, Navigation]}
	>
		<SwiperSlide>
			<Banner />
		</SwiperSlide>
		<SwiperSlide><Banner/></SwiperSlide>
		<SwiperSlide><Banner/></SwiperSlide>
		<SwiperSlide><Banner/></SwiperSlide>
		<SwiperSlide><Banner/></SwiperSlide>
		<SwiperSlide><Banner/></SwiperSlide>
	</Swiper>
)

export {Slider}
