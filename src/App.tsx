import {Suspense} from "react";
import {classNames} from "./hooks/classNames/classNames";
import {AppRouter} from "./component/router";
import './styles/index.scss'
import {Navbar} from "./component/Navbar";
function App() {

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
