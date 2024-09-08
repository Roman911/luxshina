import { FC } from 'react';
import ImageGallery from 'react-image-gallery';
import './index.scss';

// const images = [
// 	{
// 		original: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.600x600@2.jpg",
// 		thumbnail: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.400x400@2.jpg",
// 	},
// 	{
// 		original: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.600x600.jpg",
// 		thumbnail: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.400x400.jpg",
// 	},
// 	{
// 		original: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.600x600@1.jpg",
// 		thumbnail: "https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/6739.400x400@1.jpg",
// 	},
// ];

interface ImageGalleryProps {
	images: Array<{
		original: string
		thumbnail: string
	}>
}

export const ImgGallery: FC<ImageGalleryProps> = ({ images }) => {
	return <ImageGallery
		items={ images }
		showPlayButton={ false }
	/>
}
