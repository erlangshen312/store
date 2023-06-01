import React, {useEffect, useRef, useState} from "react";

import { ArticleListsComponent } from "./ArticleListsComponent"
import { all_data } from "./constants";

type ArticleListsProps = {
	category: {
		id: number;
		title: string;
		isShow: boolean;
	}
}

const ArticleListsContainer = ({ category }: ArticleListsProps) => {
	const swiperRef = useRef<any>();

	return (
		all_data
			.filter((data2: any) => data2.title === category.title)
			.map((data2: any, ix: any) => <ArticleListsComponent key={ix} swiperRef={swiperRef} title={data2?.title} data={data2?.data} />)
	)
}

export { ArticleListsContainer }
