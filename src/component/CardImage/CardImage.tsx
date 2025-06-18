import cls from './CardImage.module.scss'
import {classNames} from "../../hooks/classNames/classNames";
import {AppLink} from "../AppLink/AppLink";
import {IImageObject} from "../../hooks/useImageSearch/useImageSearch";

interface ICardImageProps {
    className?: string;
    item: IImageObject;
}

export const CardImage = ({ className, item }:ICardImageProps) => {
    return (
        <AppLink className={classNames(cls.card_image, {}, [className])} to={`/photo/${item.id}`}>
            <img src={item.urls.regular} alt={item.alt_description}/>
        </AppLink>
    );
};
