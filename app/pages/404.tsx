import {GetStaticPaths,GetStaticProps} from 'next';

const NotFoundPage = () => {
    return (
        <div>
            404
        </div>
    );
}

export const getStaticPaths:GetStaticPaths = async () => {


    return {
        paths:[],
        fallback:false
    }
}
export const getStaticProps:GetStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}

export default NotFoundPage;