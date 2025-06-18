import cls from './GridCardImages.module.scss'
import {classNames} from "../../hooks/classNames/classNames";
import {ReactNode} from "react";

interface IGridCardImagesProps {
    className?: string;
    children: ReactNode;
}

export const GridCardImages = ({ className, children }:IGridCardImagesProps) => {
    return (
        <div className={classNames(cls.grid_card_images, {}, [className])}>
            {children}
        </div>
    );
};
