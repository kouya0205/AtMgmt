import React from 'react';
import AtBtn from './btn/atBtn';
import BreakBtn from './btn/breakBtn';


function List() {

    return (
        <table className=' border-[1px] border-solid'>
	<tbody>
        <tr>
            <td className='max-[523px]:text-[10px]'>タイムカード</td>
        </tr>
		<tr>
			<td className=' border-[1px] border-solid p-1 max-[523px]:text-[10px]'>今日の日付</td>
			<td className=' border-[1px] border-solid p-1  max-[523px]:text-[10px]' colSpan={2}><AtBtn /></td>
			<td className=' border-[1px] border-solid p-1  max-[523px]:text-[10px]' colSpan={2}><BreakBtn /></td>
		</tr>
		<tr>
			<td className='max-[523px]:text-[10px]'>{toDay}</td>
			<td className=' border-[1px] border-solid p-1  max-[523px]:text-[10px]'>a</td>
			<td className=' border-[1px] border-solid p-1  max-[523px]:text-[10px]'>a</td>
			<td colSpan={2} className=' border-[1px] border-solid p-1  max-[523px]:text-[10px]'>a</td>
		</tr>
	</tbody>
</table>
    );
}

export default List

//○○○○-○○-○○の形式で日付を表示する
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const dayNum = today.getDay();
const weekday = ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"];
const day = weekday[dayNum];
const toDay = `${year}.${month}.${date} ${day}`;
