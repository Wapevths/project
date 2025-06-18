import cls from './PageError.module.scss'
import {classNames} from "../../hooks/classNames/classNames";

interface IPageErrorProps {
    className?: string;
}

export const PageError = ({ className }:IPageErrorProps) => {
    return (
        <div className={classNames(cls.PageError, {}, [className])}>

        </div>
    );
};
