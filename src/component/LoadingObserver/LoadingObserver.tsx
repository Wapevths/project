import cls from './LoadingObserver.module.scss'
import {classNames} from "../../hooks/classNames/classNames";
import {useEffect, useRef} from "react";
import {Loader} from "../Loader/Loader";

interface ILoadingObserverProps {
    className?: string;
    loadMore: () => void;
}

export const LoadingObserver = ({className, loadMore}: ILoadingObserverProps) => {
    const loadingRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) loadMore();
            },
            {threshold: 1}
        );

        const node = loadingRef.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, [loadingRef.current]);

    return (
        <div
            className={classNames(cls.loading_trigger, {}, [className])}
            ref={loadingRef}
        >
            <Loader/>
        </div>
    );
};
