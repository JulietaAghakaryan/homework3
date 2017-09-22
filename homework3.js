
const func=function(num1, num2, num3) {
return num1+num2-num3
};


const func1=function(){
       
    return 2;
};


const func3=function(x, y) {
	console.log(x-y);
};

const FullName=function(name, surname) {
	return name+" "+surname;
};
const func4=FullName("Arev", "Arevikyan")


const string=function(a,b,c){
if (a.length>b.length && a.length>c.length);
{return a;
};
if (b.length>a.length && b.length>c.length);
{return b;
};
if (c.length>a.length && c.length>b.length);
{return c;
	};
};

const func5=function(a, b){
	if(a===b){
		return 0;
};
if (a>b){
	return 1;
};
if (b>a){
	return -1;
};
};
const func51=func5(12,21);

const isTruethy=function(x,y,z){
	if(x){
		return x;
}
if(y){
	return y;
};
if(z){
	return z;
};
};
const isTruethy2=isTruethy(10, Nan, 0);