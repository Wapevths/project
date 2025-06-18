import cls from './FavoritePage.module.scss'
import {CardImage} from "../../../component/CardImage/CardImage";
import {GridCardImages} from "../../../component/GridCardImages/GridCardImages";
import {useState} from "react";

const FavoritePage = () => {
    const [images, setImages] = useState([])

    return (
        <div className={cls.favorite_page}>
            <h1>
                Избранное
            </h1>

            <GridCardImages>
                {images.map((image) => (
                    <CardImage item={image} key={image.id} />
                ))}
            </GridCardImages>
        </div>
    )
}
export default FavoritePage;
