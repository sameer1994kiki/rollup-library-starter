import { cube,add } from './maths';

// 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
function foo(x) {
	if (x) {
		return cube(x);
	}
	return -1;
}

function fun(x,y){
	return add(x+y);
}

if (process.env.NODE_ENV !== 'production') {
	console.log('-----');
}

export default {
	foo,
	fun
};
