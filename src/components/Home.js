const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg")`,
                backgroundPosition: `cover`
            }}
        >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p className="display-4 text-primary pt-5">Capgemini React App</p>
                <p>Welcome to Capgemini ReactJS appication.</p>

            </div>
        </div >
    );
}

export default Home;
