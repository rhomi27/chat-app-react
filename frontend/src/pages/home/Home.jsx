import Header from '../../components/sidebar/Header';
import SideBar from './../../components/sidebar/SideBar';
import MessageContainer from './../../components/messages/MessageContainer';

const Home = () => {

    return (
        <div className="w-full h-full max-h-[80vh] flex flex-col justify-center items-center">
            <Header />
            <div className='w-full h-full flex justify-center items-center'>
                <SideBar />
            <MessageContainer  />
            </div>
        </div>
    )
}

export default Home;