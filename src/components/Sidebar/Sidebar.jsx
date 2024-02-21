import React from 'react';

const Sidebar = (props) => {

    return (
        <div className='fixed h-screen w-[30%] bg-[#eaeaea] z-20 right-0 pt-5 pl-5 pr-5 pb-5 flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-5 max-h-[80%] overflow-scroll'>
                <div className='flex flex-col gap-5'>
                    {
                        props.cart.map((element, key)=> {
                            return(
                                <div className='w-full h-[60px] bg-white rounded-[5px] overflow-hidden flex leading-5'>
                                    <div className='bg-black h-full aspect-square rounded-[5px] flex justify-center items-center transition-all hover:bg-red-500'>
                                        <button onClick={()=> props.remove(element.title, element.nbr, element.price)} className='h-full w-full flex justify-center items-center'><img className='bin w-1/2 h-1/2' src={props.Bin} alt="" /></button>
                                    </div>
                                    <div className='bg-white h-full w-full flex pl-4 pr-4 pt-3 pb-3'>
                                        <div className='h-full w-3/4 flex flex-col justify-center'>
                                            <p className='h-1/2 font-[bold] overflow-hidden whitespace-nowrap text-ellipsis'>{element.title}</p>
                                            <p className='h-1/2 font-[light] text-[14px] '>x{element.nbr}</p>
                                        </div>
                                        <div className='h-full w-1/4 font-[bold] flex flex-col justify-start items-end'>
                                            <p>{element.priceCount}$</p>
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            
                
            </div>
        
            <div className='h-auto flex flex-col gap-5'>
                <div className='w-full h-[60px] rounded-[5px] bg-black flex justify-between items-center pl-6 pr-6'>
                    <p className='text-white'>TOTAL</p>
                    <p className='text-white'>{props.total}$</p>
                </div>
                <div className='w-full h-[60px] rounded-[5px] bg-[#bebebe] flex justify-between items-center pl-6 pr-6'>
                    <p className='text-white'>Your balance</p>
                    <p className='text-white'>{props.balance}$</p>
                </div>
                <button className='w-full h-[60px] bg-[#5066f7] pt-3 pb-3 flex items-center justify-center rounded-[5px] transition-all hover:bg-[#5066f7ce]'>
                    <div className='font-[bold] text-[20px] text-white'>Checkout</div>
                </button>
            </div>
            
        </div>
    );
}

export default Sidebar;
