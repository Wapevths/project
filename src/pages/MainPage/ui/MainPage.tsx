import cls from './MainPage.module.scss';
import { Search } from '../../../component/Search/Search';
import { GridCardImages } from '../../../component/GridCardImages/GridCardImages';
import { CardImage } from '../../../component/CardImage/CardImage';
import {useImageSearch} from "../../../hooks/useImageSearch/useImageSearch";
import {LoadingObserver} from "../../../component/LoadingObserver/LoadingObserver";

const MainPage = () => {
    const { images, search, loadMore } = useImageSearch();

    return (
        <div className={cls.main_page}>
            <Search onSearch={search} />
            <GridCardImages>
                {images.map((image) => (
                    <CardImage item={image} key={image.id} />
                ))}
            </GridCardImages>
            <LoadingObserver loadMore={loadMore} />
        </div>
    );
};

export default MainPage;
