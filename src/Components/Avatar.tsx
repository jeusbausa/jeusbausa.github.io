const Avatar = (): JSX.Element => {
    return (
        <div className="flex hover:scale-125 transition delay-100 ease-in-out">
            <img alt="photo" className="h-52 w-52 filter grayscale contrast-900 rounded-full mx-auto object-cover" src="https://media.licdn.com/dms/image/D5603AQE1iFgSweS2fQ/profile-displayphoto-shrink_800_800/0/1697816899979?e=1722470400&v=beta&t=1m7Goowyao5dKMAYfzAgCLUHfUzjjnk62Ruo2M4YYdo" />
        </div>
    );
};

export default Avatar;
