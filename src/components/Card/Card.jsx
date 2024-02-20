import React from 'react';

const Card = (props) => {
    return (
        <div className='w-[33.33%] aspect-[3/5] font-[light] text-center flex justify-center'>
            <div className='w-[90%]'>
                <div className='w-[100%] h-[80%] bg-blue-300 rounded-[10px] overflow-hidden shadow-sm shadow-[#afafaf] relative group'>
                    <div className='bg-white h-[8%] min-h-8 w-[0px] absolute top-3 left-3 rounded-[5px] overflow-hidden flex justify-start items-center transition-all z-10 group-hover:w-[47%] group-hover:pl-3'>Left: {props.quantity}</div>
                    <div className='h-[10%] w-[50%] absolute rounded-[5px] z-10 right-[0px] left-[0px] top-[0px] bottom-[0px] m-auto overflow-hidden'>
                        <button className='w-full h-full bg-white absolute left-[-100%] flex justify-start items-center rounded-[5px] transition-all group-hover:left-0 group-hover:justify-center font-[bold] hover:bg-blue-500 hover:text-white'>Add to cart</button>
                    </div>
                    <div className='absolute w-full h-full transition-all group-hover:bg-[#0000007f]'></div>
                    <img src={props.link} alt={props.title} className='w-full h-full' />
                </div>
                <p className='mt-6'>{props.title}</p>
                <p className='font-[bold]'>{props.price}$</p>
            </div>
        </div>
    );
}

export default Card;
