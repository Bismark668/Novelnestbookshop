import { CheckIcon } from '@heroicons/react/20/solid'
import facebook from '../assets/facebook.svg'
import snapchat from '../assets/snapchat.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Body() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Welcome dear Reader,</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We provide you with all the best children's books, Novels and other categories of books
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2x1 rounded-3xl ring-2 ring-w-20 ring-bg-gradient-to-r from-sky-500 to-cyan-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-200">Lifetime membership?</h3>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Join our lifetime membership and have all your favourite books and 
              novels delivered at your doorsteps with just a call..
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-sky-500">What’s included</h4>
              <div className="h-px flex-auto bg-gradient-to-r from-sky-500 to-cyan-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 hover:text-white cursor-pointer">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <br />
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <span className="inline-flex items-center rounded-md px-2 py-1 text-xs hover:text-indigo-400 cursor-pointer font-medium text-cyan-400 hover:ring-2 ring-1 ring-inset ring-cyan-400">
                Subscribe
            </span>

          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="  ring-w-20 py-10 text-center sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-30 cursor-pointer">
                <img src="https://entail-assets.com/mayple/62d3fed33127031a8d19444e_topdigitalmarketingbooks1_7537d6da3b3e12c2bfd36fb73c05db72_2000-1699776207516.jpg" className='img' />
                {/* <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                  rounded-2xl bg-gray-50 py-10 text-center ring-1 ring- ring-gray-900 lg:flex lg:flex-col lg:justify-center lg:py-16
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-gray-200 mt-5 text-center'> For more information, you can reach us on our social media handles..... </div>
      <div className='text-cyan-400 text-center mt-5 flex justify-center items-center'>
        <img src={facebook} alt='Facebook' className='ml-30 hover:scale-110 cursor-pointer w-8 h-8 '/> 
        <img src={snapchat} alt='Snapchat' className='hover:scale-110 cursor-pointer w-8 h-8 ml-10 ' />
        <img src={instagram} alt='Instagram' className='hover:scale-110 cursor-pointer w-8 h-8 ml-10' />
        <img src={twitter} alt='Twitter' className='hover:scale-110 cursor-pointer w-8 h-8 ml-10' />
      </div>
    </div>
  )
}
