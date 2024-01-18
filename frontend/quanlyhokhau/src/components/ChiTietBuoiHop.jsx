import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

function ChiTietBuoiHop({ item }) {
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  const handleOpenModal = (item) => {
    setOpen(true);
    if (item.dsduocmoi) {
      setArr(item.dsduocmoi);
    }
  }

  const dateString = item.thoigian;
  const date = new Date(dateString);
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const formattedDate = new Date(date.getTime() + offset).toISOString().substring(0, 19).replace('T', ' ');
  return (
    <tr key={item.id}>
      <td className="whitespace-nowrap text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="">
            <div className="font-medium text-gray-900">{item.chude}</div>
            <div className="text-gray-500 line-clamp-3">{item.noidung.substr(0, 70).concat("...")}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="text-gray-900">{item.diadiem}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="text-gray-500">{item.thoigian.split('T')[0]}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <span className={`inline-flex rounded-full p-2 text-sm font-semibold leading-5 text-green-800 ${item.loai == "Hành chính" ? "text-green-800 bg-green-100 " : "text-sky-800 bg-sky-100"}`}>
          {item.loai}
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <button className="whitespace-nowrap px-3 py-4 text-blue-800 hover:text-blue-900"
          onClick={() => handleOpenModal(item)}>
          Xem
        </button>
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        {item.loai.includes("Sinh hoạt") ? <button onClick={() => navigate(`/diemdanh/${item.id}`)} className=" text-indigo-600 hover:text-indigo-900">
          Điểm danh
        </button> : <button className="text-indigo-600 cursor-no-drop ">
          Điểm danh
        </button>}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          {item.chude}
                        </Dialog.Title>
                        <div className="mt-2 flex">

                          <p className="text-sm text-gray-500">
                            <span className='text-base text-black mr-1'>
                              Nội dung:
                            </span>
                            {item.noidung}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <span className='text-base text-black mr-1'>
                              Thời gian:
                            </span>
                            {formattedDate}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <span className='text-base text-black mr-1'>
                              Địa điểm:
                            </span>
                            {item.diadiem}
                          </p>
                        </div>
                        {arr.length != 0 ?
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              <span className='text-base text-black mr-1'>
                                Danh sách được mời:
                              </span>
                              {arr.map((hi) => <li>{hi}</li>)}
                            </p>
                          </div>
                          : <p></p>}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </td>
    </tr>
  )
}

export default ChiTietBuoiHop