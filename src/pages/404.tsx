import {withLayout} from "../../layout/Layout";
import NotFoundBlock from "../../components/NotFoundBlock/NotFoundBlock";

function Custom404() {
    return (
        <>
            <NotFoundBlock />
        </>
    );
}


export default withLayout(Custom404)