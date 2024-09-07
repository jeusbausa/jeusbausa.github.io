const Avatar = (): JSX.Element => {
    return (
        <div className="flex hover:scale-125 transition delay-100 ease-in-out">
            <img alt="photo" className="h-52 w-52 filter grayscale contrast-900 rounded-full mx-auto object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQFIbG8xbadgTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718257685405?e=1730937600&v=beta&t=j45pgHSj0WZcX9eUeH1glAxf6a8FXzm4d-8fj-XBRD4" />
        </div>
    );
};

export default Avatar;
