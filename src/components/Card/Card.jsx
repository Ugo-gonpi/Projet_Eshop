import React from 'react';

const Card = (props) => {
    return (
        <div className={`w-[33.33%] max-md:w-[50%] max-sm:w-[100%] aspect-[3/5] font-[light] text-center flex justify-center ${props.unclickable == true ? `pointer-events-none opacity-50`:``}`}>
            <div className='w-[90%]'>
                <div className='w-[100%] h-[80%] bg-blue-300 rounded-[10px] overflow-hidden shadow-sm shadow-[#afafaf] relative group'>
                    <div className={`bg-white h-[8%] min-h-8 w-[0px] absolute top-3 left-3 rounded-[5px] overflow-hidden flex justify-center items-center transition-all z-10 group-hover:w-[30%]  ${props.quantity == 1 ? `bg-yellow-400`:``}`}>Left:  
                        {props.quantity}
                    </div>


                    <div className='h-[10%] w-[50%] absolute rounded-[5px] z-10 right-[0px] left-[0px] top-[0px] bottom-[0px] m-auto overflow-hidden'>
                        <button onClick={()=> props.addToCart(props.priceCount, props.title, props.price, props.quantity)} className={`w-full h-full bg-white absolute left-[-100%] flex justify-start items-center rounded-[5px] transition-all group-hover:left-0 group-hover:justify-center font-[bold] hover:bg-[#5066f7] hover:text-white ${props.balance < props.price ? `pointer-events-none` : ``}`}>
                            {
                                props.balance >= props.price ? "Add to cart" : "Too expensive"
                            }
                        </button>
                    </div>
                    <div className='absolute w-full h-full transition-all group-hover:bg-[#0000007f]'></div>
                    <img src={props.link} alt={props.title} className='w-full h-full' />
                </div>
                <p className='mt-6 tracking-wide'>{props.title}</p>
                <p className='font-[bold]'>{props.price}$</p>
            </div>
        </div>
    );
}

export default Card;
