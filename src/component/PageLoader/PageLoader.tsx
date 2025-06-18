import cls from './PageLoader.module.scss';
import {classNames} from "../../hooks/classNames/classNames";
import {Loader} from "../Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
