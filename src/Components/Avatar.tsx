const Avatar = (): JSX.Element => {
    return (
        <div className="flex hover:scale-125 transition delay-100 ease-in-out">
            <img alt="photo" className="h-52 w-52 filter grayscale contrast-900 rounded-full mx-auto object-cover" src="https://media.licdn.com/dms/image/D5603AQFIbG8xbadgTg/profile-displayphoto-shrink_800_800/0/1717510043536?e=1723075200&v=beta&t=kc6QxVvc05KX3lY5y-DYCe7cUxHuRGxS-OZalFfa-ck" />
        </div>
    );
};

export default Avatar;
