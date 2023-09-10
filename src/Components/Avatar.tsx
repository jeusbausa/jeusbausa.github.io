const Avatar = (): JSX.Element => {
    return (
        <div className="flex-1">
            <img alt="photo" className="h-52 w-52 rounded-full mx-auto object-cover" src="images/profile.jpg" />
        </div>
    );
};

export default Avatar;
