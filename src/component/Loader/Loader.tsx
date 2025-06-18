import './Loader.scss';
import {classNames} from "../../hooks/classNames/classNames";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('loader', {}, [className])}>

    </div>
);
