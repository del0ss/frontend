import {withLayout} from "../../layout/Layout";
import Index from "../../components/NotFoundBlock/NotFoundBlock";

function Custom404() {
    return (
        <>
            <Index />
        </>
    );
}


export default withLayout(Custom404)