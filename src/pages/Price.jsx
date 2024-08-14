import React from 'react';
import colorPallete from '../context/colors';

function Price() {
    const theme = colorPallete();

    return (
        <section className='mx-auto w-1/2 h-screen'>
            <div style={{ backgroundColor: theme.bg4 }} className="rounded-md py-16 px-8 mt-8">
                <h1 className='text-indigo-500 text-3xl font-bold mb-4'>API Pricing</h1>
                <p className='text-lg mb-8'>
                    Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the cost:
                </p>

                <div className='w-full overflow-x-auto'>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr style={{ backgroundColor: "#4C3BCF" }} className='text-white'> 
                            <th className='py-4 px-6 text-left'>API</th>
                                <th className='py-4 px-6 text-left'>MODEL</th>
                               
                                <th className='py-4 px-6 text-left'>PRICE PER 1K TOKENS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: theme.bg4 }} className='text-gray-900 border border-gray-600'>
                                <td className='py-4 px-6 text-white font-bold'>OpenAI</td>
                                <td className='py-4 px-6 text-white font-bold'>GPT-3.5</td>
                                <td className='py-4 px-6 text-white font-bold'>$0.002</td>
                               
                            </tr>
                            <tr style={{ backgroundColor: theme.bg4 }} className='text-gray-900 border border-gray-600'>
                                <td className='py-4 px-6 text-white font-bold'>OpenAI</td>
                                <td className='py-4 px-6 text-white font-bold'>GPT-4</td>
                                <td className='py-4 px-6 text-white font-bold'>$0.03</td>
                            </tr>
                            <tr style={{ backgroundColor: theme.bg4 }} className='text-gray-900 border border-gray-600'>
                                <td className='py-4 px-6 text-white font-bold'>Together AI</td>
                                <td className='py-4 px-6 text-white font-bold'>Liama-2-70b</td>
                                <td className='py-4 px-6 text-white font-bold'>$0.0008</td>
                            </tr>
                            <tr style={{ backgroundColor: theme.bg4 }} className='text-gray-900 border border-gray-600'>
                                <td className='py-4 px-6 text-white font-bold'>Together AI</td>
                                <td className='py-4 px-6 text-white font-bold'>Liama-2-13b</td>
                                <td className='py-4 px-6 text-white font-bold'>$0.0006</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                    <div className='mt-6'>
                        <h1 className='text-indigo-400 font-extrabold text-2xl'>Token Estimation</h1>
                        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool</p>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-indigo-400 font-extrabold text-2xl'>Billing</h1>
                        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills
                        accordingly. Detailed usage reports are available in your account dashboard.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;
