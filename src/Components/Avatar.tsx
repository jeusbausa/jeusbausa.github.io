const Avatar = (): JSX.Element => {
    return (
        <div className="flex hover:scale-125 transition delay-100 ease-in-out">
            <img alt="photo" className="h-52 w-52 filter grayscale contrast-900 rounded-full mx-auto object-cover" src="https://avatars.githubusercontent.com/u/47097646" />
        </div>
    );
};

export default Avatar;
