import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center; 
	
	${(props) => props.icon && `
		& > * {
			margin-right: 10px;
		}
	`};
`;

const Button = styled.button`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
  // background-color: #F2F3F5;
  color: #000;
  border: none;
	padding: ${(props) => props.icon ? '7px 7px' : '12px 17px'};
  border-radius: ${(props) => props.icon ? '60px' : '10px'};
  text-decoration: none;
  transition: border-color .3s ease;
  cursor: pointer;
  appearance: none;
  font-size: 14px;
  font-weight: bold;
  
  &:hover {
    color: #000;
    background-color: #F2F3F7;
  }
  
  &:active {
    background-color: #F2F3F7;
  }
`;

type HelloButton = {
	title: string;
	subtitle: string;
	icon: object;
	onClick():void;
	onBlur():void;
	disabled: boolean;
}

const HelloButton = ({ title, subtitle, icon, onClick, onBlur, disabled}: any) => {
	// TODO: Fix the icon and call children
	return (
		<Wrapper icon={icon}>
			<Button onClick={onClick} disabled={disabled} icon={icon}>{ icon } { title }</Button>
		</Wrapper>
	)
}

export { HelloButton }
