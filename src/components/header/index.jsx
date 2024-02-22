import { Shape } from "../svgs/Svgs";

const Header = () => {
    return (
        <header className="h-[90vh]">
            <div className="container grid grid-cols-2 h-full">

                <div className="flex flex-col items-start justify-center pl-14">

                    <span className="text-[#623985] font-sans-medium mb-4">+10 هزار کاربر فعال در کشور</span>
                    <h1
                        className="text-4xl font-sans-bold mb-6 leading-[47px]"
                    >با
                        <span className="font-yekan-black bg-gradient-to-r from-[#623985de] to-[#C270C0] text-transparent bg-clip-text mx-1.5">Chatify</span> به کمک هوش مصنوعی با بقیه به صورت رندوم چت کن</h1>
                    <p className="font-sans-medium text-black/70 mb-5">
                        تو چتی فای تو میتونی با بقیه صحبت کنی. میخوای با کسایی که نزدیکتن صحبت کنی؟ <br />
                        با چتیفای حتی میتونی با هوش مصنوعی تو رابطت مشورت بگیری؟ آماده ای؟! <br />
                        پس بزن بریم یه دوست پیدا کنیم
                    </p>
                    <button
                        className="text-white bg-gradient-to-bl from-[#925bc2dc] to-[#ee83ed] px-9 py-2.5 rounded-md"
                    >شروع کن</button>

                </div>
                <div className="relative flex items-center">
                    <Shape />
                    <img src="/images/header-hero.png" className="absolute top-[50%] translate-y-[-50%] scale-110" alt="home" />
                    {/* <HeaderVector /> */}
                </div>

            </div>
        </header>
    );
}

export default Header;