import LocalFont from "next/font/local";

export const sansLight = LocalFont({
    src: [
        {
            path: "../../public/fonts/IRANSansWeb_Light.woff2",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--sans-light",
});

export const sansRegular = LocalFont({
    src: [
        {
            path: "../../public/fonts/IRANSansWeb_Regular.woff2",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--sans-regular",
});

export const sansMedium = LocalFont({
    src: [
        {
            path: "../../public/fonts/IRANSansWeb_Medium.woff2",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--sans-medium",
});

export const sansBold = LocalFont({
    src: [
        {
            path: "../../public/fonts/IRANSansWeb_Bold.woff2",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--sans-bold",
});

export const yekanBlack = LocalFont({
    src: [
        {
            path: "../../public/fonts/IRANYekanX-ExtraBlack.woff2",
            style: "normal"
        },
    ],
    display: "swap",
    variable: "--yekan-black",
});