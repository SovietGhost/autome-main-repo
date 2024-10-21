import React, { useState } from 'react'
import { brakeSystem, categories, colors, fuelType, transmissionType } from '~/app/consts/details';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { api } from '~/trpc/react';
import { IoCloseSharp } from "react-icons/io5";

function FilterAccordion({ open, onClose }: { open: any, onClose: () => any }) {
  const [manufacturer, setManufacturer] = useState("");
  const { data: makeData } = api.make.make.useQuery();
  const { data: modelData } = api.make.models.useQuery({
    make: manufacturer,
  });
  return (
    <>
      {
        open && <div className='px-4 py-3 flex justify-between'>
          <p>Filtr</p>
          <IoCloseSharp onClick={onClose} />
        </div>
      }
      <Accordion type="single" collapsible>
        <AccordionItem className='border border-[#E3E2FF] rounded-t' value="item-1">
          <AccordionTrigger className='font-medium px-4 hover:bg-hoverWhite duration-300"'>İstehsalçı</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              makeData?.map(make => {
                return (
                  <div className="flex justify-between">
                    <p className="text-sm text-[#828091]">{make}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-2  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Model</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              modelData?.map(make => {
                return (
                  <div className="flex justify-between" key={make}>
                    <p className="text-sm text-[#828091]">{make}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className='md:w-full'>
        <input type="text" id="year" aria-placeholder="il" className="border   pt-3 border-[#E3E2FF] rounded-t  text-gray-900  font-medium px-4 hover:bg-hoverWhite duration-300 placeholder:text-black   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="İl" required />
      </div>
      <div className='md:w-full'>
        <input type="text" id="mileage" aria-placeholder="Kilometr" className="border  pt-3 border-[#E3E2FF] rounded-t  text-gray-900  font-medium px-4 hover:bg-hoverWhite duration-300 placeholder:text-black   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Kilometr" required />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-2  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Rəng</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              colors.map(color => {
                return (
                  <div className="flex justify-between" key={color.id}>
                    <p className="text-sm text-[#828091]">{color.color}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>



        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-3  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Kateqoriya</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              categories.map(category => {
                return (
                  <div className="flex justify-between" key={category.key}>
                    <p className="text-sm text-[#828091]">{category.option}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className='md:w-full'>
        <input type="number" id="engineCapacity" aria-placeholder="Mühərrikin həcmi (sm3)" className="border  pt-3 border-[#E3E2FF] rounded-t  text-gray-900  font-medium px-4 hover:bg-hoverWhite duration-300 placeholder:text-black   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mühərrikin həcmi (sm3)" required />
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-2  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Yanacaq növü</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              fuelType.map(fuel => {
                return (
                  <div className="flex justify-between" key={fuel.id}>
                    <p className="text-sm text-[#828091]">{fuel.type}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>



        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-3  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Aparıcı tərəf</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              brakeSystem.map(item => {
                return (
                  <div className="flex justify-between" key={item.key}>
                    <p className="text-sm text-[#828091]">{item.option}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border border-[#E3E2FF] rounded-t" value="item-4  ">
          <AccordionTrigger className="font-medium px-4 hover:bg-hoverWhite duration-300">Ötürücü növü</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4 pt-3">
            {
              transmissionType.map(item => {
                return (
                  <div className="flex justify-between" key={item.key}>
                    <p className="text-sm text-[#828091]">{item.option}</p>
                    <input className="accent-secondaryApp" type="checkbox" name="" id="" />
                  </div>
                )
              })
            }
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      <div className='md:w-full'>
        <input type="text" id="brakeSystem" aria-placeholder="Əyləc sistemi" className="border  pt-3 border-[#E3E2FF] rounded-t  text-gray-900  font-medium px-4 hover:bg-hoverWhite duration-300 placeholder:text-black   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Əyləc sistemi" required />
      </div>
      <div className='md:w-full'>
        <input type="number" id="startPrice" aria-placeholder="Qiymət" className="border  pt-3 border-[#E3E2FF] rounded-t  text-gray-900  font-medium px-4 hover:bg-hoverWhite duration-300 placeholder:text-black   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Qiymət" required />
      </div>
    </>

  )
}

export default FilterAccordion