import Img from '../images/cards.svg';

export default function Section3() {
    return (
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="flex flex-col items-end w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Get unlimited transactions{' '}
                <br className="hidden md:block" />
                with our new{' '}
                <span className="inline-block text-blue-400 italic">
                  diamond card
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Apply Now
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-500"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 left-5 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-contain w-3/4 h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={Img}
            alt=""
          />
        </div>
      </div>
    );
  };