import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import cls from './PhotoPage.module.scss'
import axios from "../../../utils/Api";
import {IImageObject} from "../../../hooks/useImageSearch/useImageSearch";
import live from '../../../assets/live.svg'
import download from '../../../assets/download.svg'
import {classNames} from "../../../hooks/classNames/classNames";

const PhotoPage = () => {
    const {id} = useParams()
    const [image, setImage] = useState<IImageObject | null>(null)
    const fetchImage = async (id: string) => {
        try {
            const response = await axios.get(`/photos/${id}`);
            setImage(response.data);
        } catch (error) {
            console.error('Ошибка загрузки изображений:', error);
        }
    };

    useEffect(() => {
        fetchImage(id)
    }, [id])


    const handleLikePhoto = async () => {
        await axios.post(`/photos/${id}/like`).then(() => {
            fetchImage(id)
        })
    }

    const handleDisLikePhoto = async () => {
        await axios.delete(`/photos/${id}/like`).then(() => {
            fetchImage(id)
        })
    }

    const handleDownload = async () => {
        if (!image) return;

        try {
            await axios.get(image.links.download_location);

            const response = await fetch(image.urls.full);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ошибка при скачивании изображения:', error);
        }
    };

    return (
        <div className={cls.container_photo_page}>
            <div className={cls.container_header}>
                <div className={cls.sub_container_author}>
                    <img
                        src={image?.user?.profile_image.medium}
                        alt="author image"
                        className={cls.author_image}
                    />
                    <div className={cls.container_author_name}>
                        <p className={cls.name}>
                            {image?.user?.name}
                        </p>
                        <p className={cls.twitter_name}>
                            @
                            {
                                !image?.user?.twitter_username ?
                                    image?.user?.instagram_username :
                                    image?.user?.twitter_username
                            }
                        </p>
                    </div>
                </div>

                <div className={cls.sub_container_button}>
                    <button
                        className={
                            classNames(cls.favorite_button, {}, [image?.cover_photo?.liked_by_user && cls.active])
                        }
                        onClick={image?.cover_photo?.liked_by_user ? handleDisLikePhoto : handleLikePhoto}
                    >
                        <img
                            src={live}
                            alt="favorite"
                            className={classNames(cls.image, {}, [image?.cover_photo?.liked_by_user && cls.active_image])}
                        />
                    </button>

                    <button
                        className={
                            classNames(cls.download_button, {}, [])
                        }
                        onClick={handleDownload}
                    >
                        <img
                            src={download}
                            alt="download"
                            className={classNames(cls.image, {}, [])}
                        />
                        <p>
                            Downloand
                        </p>
                    </button>
                </div>
            </div>

            <div className={cls.background_image_photo} style={{
                backgroundImage: `url(${image?.urls.full})`,
            }}/>
            <div className={cls.blackout_background}/>

            <img
                src={image?.urls.full}
                alt={image?.alt_description}
                className={classNames(cls.selected_image)}
            />
        </div>
    )
}
export default PhotoPage;
