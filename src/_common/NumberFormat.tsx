type NumberFormatProps = {
	price: number ;
}

export const NumberFormat = ({ price }: NumberFormatProps ) => {
	return price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}


