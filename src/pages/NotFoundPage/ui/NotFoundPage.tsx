import cls from './NotFoundPage.module.scss';
import {classNames} from "../../../hooks/classNames/classNames";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    );
};
