import Button from "./Button";

/**
 * DISPLAYS THE SOCIAL INFO
 */

const SocialDetails = () => {
    return (
        <div className="flex flex-col justify-center xl:justify-start items-center gap-6 w-full h-min lg:flex-row lg:gap-8">
            <Button classNames="flex justify-center items-center gap-2 border-transparent bg-black text-white py-3 w-full lg:w-auto hover:bg-gray-900" url="#">
                <img src="/images/apple_logo.svg" alt="image of an arrow pointer" />
                <p>App Store</p>
            </Button>
            <div className="flex justify-start items-center gap-3 relative">
                <div className="flex justify-center items-center overflow-visible w-32 relative">
                    <div className="w-12">
                        <div className="w-11">
                            <img src="/images/avatar_1.png" alt="avatar image" width="40" height="40" className="rounded-full top-0 left-0 border border-zinc-200 w-11" />
                        </div>
                    </div>
                    <div className="w-12">
                        <div className="w-10">
                            <img src="/images/avatar_2.png" alt="avatar image" width="40" height="40" className="w-11 rounded-full border border-zinc-200 absolute top-0 left-9" />
                        </div>
                    </div>
                    <div className="w-12">
                        <div className="w-10">
                            <img src="/images/avatar_3.png" alt="avatar image" width="40" height="40" className="rounded-full absolute top-0 left-16 border border-zinc-200 w-11" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <p className="font-medium text-zinc-800 text-base leading-6 text-center">24K+</p>
                    <p className="font-normal text-zinc-500 text-xs text-left">Active User</p>
                </div>
            </div>
        </div>
    );
}

export default SocialDetails;