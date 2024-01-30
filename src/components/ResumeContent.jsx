import React from 'react'

const ResumeContent = ({data}) => {
  return (
    <div className="bg-cream justify-center flex pt-8 pb-8 items-center font-jost">

    <ul className="space-y-5 md:space-y-11 relative sm:before:content-[''] sm:before:absolute sm:before:left-72 sm:before:border-r sm:before:border-black sm:before:h-[calc(100%_-1.5rem)] sm:before:top-1/2 sm:before:-translate-y-1/2">
        {data.map((item) =>(

            <li className="p-5 border rounded-xl sm:flex max-sm:space-y-2 border-black md:border-0 md:p-0 md:rounded-none" key={item.id}>
            <div className="flex items-center justify-between mb-5 sm:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-emerald-500 text-opacity-60 md:text-base md:text-opacity-100">
                    {item.location}</h6>
                <p className="text-[13px] md:text-sm text-theme">
                    {item.range}
                </p>
            </div>
            <div className="sm:flex-1 sm:pl-16 relative sm:before:content-[''] sm:before:absolute sm:before:-left-1 sm:before:top-3 sm:before:w-2 sm:before:h-2 sm:before:bg-theme sm:before:rounded-full sm:before:shadow-dots_glow">
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-emerald-500  mb-2.5">
                    {item.position}
                </h4>
                <p>
                    {item.text}
                </p>
            </div>
            </li>

        ))}
   

 
</ul>
</div>
  )
}

export default ResumeContent
 
