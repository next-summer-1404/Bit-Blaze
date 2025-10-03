import React from 'react';
import LedtSide from '../leftSide/LedtSide';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div
      style={{ padding: "0" }}
      className="flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-4 md:gap-30 justify-center w-full max-w-full sm:max-w-[1376px] m-auto px-2 sm:px-4 py-4">
      <LedtSide />
      <div className="w-full max-w-[590.75px] min-h-[200px] sm:min-h-[300px] md:min-h-[600px] h-auto overflow-hidden flex flex-col">
        <div className="flex flex-col gap-3 sm:gap-5">
          <h1 className="text-2xl md:text-[32px] font-[300] whitespace-nowrap text-center md:text-right">
            به خانواده دلتا ، خوش برگشتی !
          </h1>
          <p className="text-sm md:text-[16px] font-[500] text-center md:text-right">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-10">
          <div className="flex flex-col">
            <div className="max-w-[588.25px] w-full h-auto bg-[#303030] flex flex-row rounded-2xl gap-2 p-1 sm:p-2">
              <div className="flex bg-[#8CFF45] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className="font-[600] text-[16px] text-[#363636] flex">ورود با پسورد</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_8408)">
                    <path d="M8 8C8.79113 8 9.56448 7.76541 10.2223 7.32588C10.8801 6.88635 11.3928 6.26164 11.6955 5.53074C11.9983 4.79983 12.0775 3.99556 11.9231 3.21964C11.7688 2.44372 11.3878 1.73098 10.8284 1.17157C10.269 0.612165 9.55629 0.231202 8.78036 0.0768607C8.00444 -0.0774802 7.20017 0.00173314 6.46927 0.304484C5.73836 0.607234 5.11365 1.11992 4.67412 1.77772C4.2346 2.43552 4 3.20888 4 4C4.00106 5.06054 4.42283 6.07734 5.17274 6.82726C5.92266 7.57718 6.93946 7.99894 8 8ZM8 1.33334C8.52742 1.33334 9.04299 1.48973 9.48152 1.78275C9.92005 2.07577 10.2618 2.49224 10.4637 2.97951C10.6655 3.46678 10.7183 4.00296 10.6154 4.52024C10.5125 5.03753 10.2586 5.51268 9.88562 5.88562C9.51268 6.25856 9.03752 6.51254 8.52024 6.61543C8.00296 6.71832 7.46678 6.66551 6.97951 6.46368C6.49224 6.26185 6.07577 5.92005 5.78275 5.48152C5.48973 5.04299 5.33333 4.52742 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61429 7.29276 1.33334 8 1.33334Z" fill="#363636" />
                    <path d="M8 9.33398C6.40924 9.33575 4.88414 9.96846 3.75931 11.0933C2.63447 12.2181 2.00176 13.7432 2 15.334C2 15.5108 2.07024 15.6804 2.19526 15.8054C2.32029 15.9304 2.48986 16.0007 2.66667 16.0007C2.84348 16.0007 3.01305 15.9304 3.13807 15.8054C3.2631 15.6804 3.33333 15.5108 3.33333 15.334C3.33333 14.0963 3.825 12.9093 4.70017 12.0342C5.57534 11.159 6.76232 10.6673 8 10.6673C9.23768 10.6673 10.4247 11.159 11.2998 12.0342C12.175 12.9093 12.6667 14.0963 12.6667 15.334C12.6667 15.5108 12.7369 15.6804 12.8619 15.8054C12.987 15.9304 13.1565 16.0007 13.3333 16.0007C13.5101 16.0007 13.6797 15.9304 13.8047 15.8054C13.9298 15.6804 14 15.5108 14 15.334C13.9982 13.7432 13.3655 12.2181 12.2407 11.0933C11.1159 9.96846 9.59076 9.33575 8 9.33398Z" fill="#363636" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_8408">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className="font-[600] text-[16px] text-[#AAAAAA] flex">ورود با شماره</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_8413)">
                    <path d="M15.3332 7.33398H13.9998V6.00065C13.9998 5.82384 13.9296 5.65427 13.8046 5.52925C13.6796 5.40422 13.51 5.33398 13.3332 5.33398C13.1564 5.33398 12.9868 5.40422 12.8618 5.52925C12.7367 5.65427 12.6665 5.82384 12.6665 6.00065V7.33398H11.3332C11.1564 7.33398 10.9868 7.40422 10.8618 7.52925C10.7367 7.65427 10.6665 7.82384 10.6665 8.00065C10.6665 8.17746 10.7367 8.34703 10.8618 8.47206C10.9868 8.59708 11.1564 8.66732 11.3332 8.66732H12.6665V10.0007C12.6665 10.1775 12.7367 10.347 12.8618 10.4721C12.9868 10.5971 13.1564 10.6673 13.3332 10.6673C13.51 10.6673 13.6796 10.5971 13.8046 10.4721C13.9296 10.347 13.9998 10.1775 13.9998 10.0007V8.66732H15.3332C15.51 8.66732 15.6796 8.59708 15.8046 8.47206C15.9296 8.34703 15.9998 8.17746 15.9998 8.00065C15.9998 7.82384 15.9296 7.65427 15.8046 7.52925C15.6796 7.40422 15.51 7.33398 15.3332 7.33398Z" fill="#AAAAAA" />
                    <path d="M6 8C6.79113 8 7.56449 7.76541 8.22228 7.32588C8.88008 6.88635 9.39277 6.26164 9.69552 5.53074C9.99827 4.79983 10.0775 3.99556 9.92314 3.21964C9.7688 2.44372 9.38784 1.73098 8.82843 1.17157C8.26902 0.612165 7.55629 0.231202 6.78036 0.0768607C6.00444 -0.0774802 5.20017 0.00173314 4.46927 0.304484C3.73836 0.607234 3.11365 1.11992 2.67412 1.77772C2.2346 2.43552 2 3.20888 2 4C2.00106 5.06054 2.42283 6.07734 3.17274 6.82726C3.92266 7.57718 4.93946 7.99894 6 8ZM6 1.33334C6.52742 1.33334 7.04299 1.48973 7.48152 1.78275C7.92005 2.07577 8.26185 2.49224 8.46368 2.97951C8.66551 3.46678 8.71832 4.00296 8.61543 4.52024C8.51253 5.03753 8.25856 5.51268 7.88562 5.88562C7.51268 6.25856 7.03752 6.51254 6.52024 6.61543C6.00296 6.71832 5.46678 6.66551 4.97951 6.46368C4.49224 6.26185 4.07576 5.92005 3.78275 5.48152C3.48973 5.04299 3.33333 4.52742 3.33333 4C3.33333 3.29276 3.61428 2.61448 4.11438 2.11438C4.61448 1.61429 5.29276 1.33334 6 1.33334Z" fill="#AAAAAA" />
                    <path d="M6 9.33398C4.40924 9.33575 2.88414 9.96846 1.75931 11.0933C0.634472 12.2181 0.00176457 13.7432 0 15.334C0 15.5108 0.0702379 15.6804 0.195262 15.8054C0.320286 15.9304 0.489856 16.0007 0.666667 16.0007C0.843478 16.0007 1.01305 15.9304 1.13807 15.8054C1.2631 15.6804 1.33333 15.5108 1.33333 15.334C1.33333 14.0963 1.825 12.9093 2.70017 12.0342C3.57534 11.159 4.76232 10.6673 6 10.6673C7.23768 10.6673 8.42466 11.159 9.29983 12.0342C10.175 12.9093 10.6667 14.0963 10.6667 15.334C10.6667 15.5108 10.7369 15.6804 10.8619 15.8054C10.987 15.9304 11.1565 16.0007 11.3333 16.0007C11.5101 16.0007 11.6797 15.9304 11.8047 15.8054C11.9298 15.6804 12 15.5108 12 15.334C11.9982 13.7432 11.3655 12.2181 10.2407 11.0933C9.11586 9.96846 7.59076 9.33575 6 9.33398Z" fill="#AAAAAA" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_8413">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-row max-w-[588px] w-full items-center justify-between gap-2 sm:gap-4">
            <div className="flex bg-[#8CFF45] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2">
              <p className="font-[600] text-[16px] text-[#363636] flex">ورود با حساب گوگل</p>
              <Image src={'/assets/authImages/GoogleIcon.png'} width={24} height={24} alt="Google" />
            </div>
            <div className="flex bg-[#444444] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2">
              <p className="font-[600] text-[16px] text-[#AAAAAA] flex">ورود با حساب اپل</p>
              <Image src={'/assets/authImages/Apple-icone.png'} width={24} height={24} alt="Apple" />
            </div>
          </div>
          <div className="flex max-w-[558px] h-[20px] w-full items-center  mr-auto ml-auto  rounded-full">
            <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 1H250" stroke="url(#paint0_linear_1_8424)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_1_8424" x1="1.875" y1="1.5" x2="250" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.06" stopColor="#AAAAAA" stopOpacity="0.94" />
                  <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-semibold text-[#AAAAAA] leading-8 px-4 sm:px-8 py-2 sm:py-3 whitespace-nowrap">یا میتونید</span>
            <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M249.875 1L1.75001 0.999978" stroke="url(#paint0_linear_1_8425)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_1_8425" x1="249.875" y1="0.5" x2="1.75" y2="0.499978" gradientUnits="userSpaceOnUse">
                  <stop offset="0.06" stopColor="#AAAAAA" stopOpacity="0.94" />
                  <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <form className="flex gap-2 sm:gap-4 flex-col" action="">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 items-center">
              <fieldset className="border border-[#AAAAAA] p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full">
                <legend className="text-[#AAAAAA] text-[16px] font-[400] px-2">
                  ایمیل شما <span className="text-red-500">*</span> :
                </legend>
                <input
                  type="text"
                  className="w-full outline-0 text-[#AAAAAA] mr-1 sm:mr-2"
                  placeholder="مثال : dakjsbd@email.com"
                  style={{ maxWidth: '200px' }}
                />
              </fieldset>
              <fieldset className="border border-[#AAAAAA] p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full">
                <legend className="text-[#AAAAAA] text-[16px] font-[400] px-1 sm:px-2">کلمه عبور * :</legend>
                <input
                  type="password"
                  className="w-full outline-0 text-[#AAAAAA] mr-1 sm:mr-2"
                  style={{ maxWidth: '200px' }}
                />
              </fieldset>
            </div>
            <div className="flex justify-end gap-2 sm:gap-3 ml-5 sm:ml-10 items-center">
              رمز عبور خود را فراموش کردم
              <Image src={'/assets/authImages/iconsleftarrow-50.png'} alt="arrow" width={25} height={25} />
            </div>
            <button className="cursor-pointer flex rounded-[12px] flex-row justify-center items-center font-[600] text-sm md:text-[16px] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] bg-[#8CFF45] w-full max-w-[588.25px] text-[#363636] h-auto py-2 sm:py-3 gap-2 sm:gap-4">
              ورود به حساب کاربری
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.375 1L2.375 6L7.375 11" stroke="#363636" strokeWidth="2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;