import { cube,add } from './maths';

// 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
export function foo(x) {
	if (x) {
		return cube(x);
	}
	return -1;
}

export function fun(x,y){
	x = x + 1;
	return add(x+y);
}

export function sum(obj){
	let {name,age} = obj;
	return `姓名: ${name} 年龄：${age}`
}

if (process.env.NODE_ENV !== 'production') {
	console.log('-----');
}