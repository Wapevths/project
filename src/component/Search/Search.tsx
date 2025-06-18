import cls from './Search.module.scss'
import {classNames} from "../../hooks/classNames/classNames";
import search from "../../assets/search.svg";
import {useState} from "react";

interface ISearchProps {
    className?: string;
    onSearch: (search: string) => void;
}

export const Search = ({className, onSearch}: ISearchProps) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className={classNames(cls.container_input, {}, [className])}>
            <div className={cls.sub_container_input}>
                <input
                    type="text"
                    placeholder="Поиск"
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={cls.input}
                    value={searchValue}
                />
                <button className={cls.button_image_search} onClick={() => onSearch(searchValue)}>
                    <img src={search} alt="search"/>
                </button>
            </div>
            <div className={cls.blackout_background}/>
        </div>
    );
};
