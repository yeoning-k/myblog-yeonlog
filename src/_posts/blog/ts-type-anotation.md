---
title: 타입스크립트 기초, 변수와 함수의 타입 정의하기
description:
tags:
  - typescript
coverImage:
link:
date: 2023-12-05
---

# 타입 정의

타입스크립트는 변수와 함수에 타입을 정의할 수 있다.
아래와 같은 방식으로 콜론(:)을 이용하여 타입을 정의하는 방식을 타입표기(**Type Annotation**)라고 한다.

```tsx
const 변수명: 타입 = '값'
```

타입스크립트에서 프로그램 작성을 위해 기본으로 제공하는 데이터 타입은 자바스크립트의 기본 자료형을 모두 포함하며 타입스크립트 고유 타입이 추가적으로 제공된다.
  
<br/>

**JS 기본 자료형**

- string
- number
- boolean
- null
- undefined
- object
- array

**TS 고유 타입**

- any
- void
- never
- enum
- tuple

## 기본 타입 정의

### string

특정 데이터 타입이 문자열 일때 사용

```tsx
const name: string = 'yeoning';
```

### number

특정 데이터 타입이 숫자로만 이루어져 있을때 사용

```tsx
const age: number = 100;
```

### boolean

참과 거짓을 구분하는 진위 값만 취급할때 사용

```tsx
const isLogin: boolean = false;
```

### object

객체 유형의 데이터를 취급할때 사용한다.

아래와 같이 `: object` 타입으로만 선언했을 경우,
객체 내 어떤 속성이 있는지 해당 속성이 무슨 타입인지 알 수 없으므로 자바스크립트를 사용하는 것과 크게 차이가 없게 되어 타입스크립트의 장점을 극대화하기 위해 가급적 타입을 구체적으로 선언해 주어야 한다.

```tsx
const person: object = {
	name: 'yeoning',
	age: 100
};
```

아래처럼 객체와 똑같은 모습으로 객체 내 속성을 구체적으로 명시해주거나 [인터페이스](https://www.notion.so/96cabf40d8d948aebf5ec952e51c8b29?pvs=21)를 사용해 타입을 정의해주면 된다. (객체와 똑같은 모습이지만 구분은 세미콜론(;)으로 하니 주의)

```tsx
const person: {
	name: string; //세미콜론 주의
	age: number;
} = {
	name: 'yeoning',
	age: 100
}
```

### Array

두가지 방법으로 선언할 수 있다.

- `Array<배열의 데이터 타입>` (제네릭 형태)
- `배열의 데이터 타입[]`

```tsx
//Array<배열의 데이터 타입>
const colors: Array<string> = ['빨강', '노랑', '초록'];
const prices: Array<number> = [ 990, 1000, 50000 ];

//배열의 데이터 타입[]
const colors: string[] = ['빨강', '노랑', '초록'];
const prices: number[] = [ 990, 1000, 50000 ];
```

### tuple

특정 형태를 갖는 배열(배열의 길이가 고정되고 각 요소 타입이 정의된 배열)

```tsx
const items: [string, number] = ['hi', 100];
```

위 코드는 배열의 길이가 2고 첫번째 요소는 문자열, 두번째 요소는 숫자인 타입으로 정의되어 있기 때문에
첫번째 배열 요소에는 문자열 hi가, 두번째 배열 요소에는 숫자인 100이 지정되었다.

정해진 순서와 타입에 맞지 않게 값이 들어간다면 에러가 발생하게 된다.

### any

아무 데이터나 취급하겠다는 의미로 타입스크립트에서 자바스크립트의 유연함을 취하려고 할 때 사용한다.

```tsx
let text: any = 'hello';
text = 1000;
```

위 코드의 text 변수는 any 타입을 지정해두었기 때문에 초기에는 hello라는 문자열을 가지고 있지만 이후에 1000이라는 숫자 데이터 타입으로 값을 변경해도 에러가 발생하지 않는다.

이미 작성된 자바스크립트 코드를 타입스크립트로 변환할 때 유용하게 사용할 수 있는 타입이지만 **사용하는것은 지양**하는것이 좋다.

### null 과 undefined

- null: 의도적인 빈값. 개발자가 의도적으로 값을 비워두고 싶을때 사용함.
- undefined: 변수를 선언할 때 값을 할당하지 않으면 기본적으로 할당되는 초기값.

타입스크립트는 위 두값을 타입으로 지정할 수 있다.

```tsx
const empty: null = null;
const notingAssigned: undefined;
```


> null 과 undefined 타입은 타입스크립트 설정 파일의 strict 옵션에 따라서 사용 여부가 결정된다.  
> strict 옵션이 꺼져 있을 때는 신경 쓰지 않아도 되는 타입.


## 함수 타입 정의

함수는 입력값(파라미터)과 출력값(반환값) 값에 대한 타입을 정의해야한다.

```tsx
function 함수명(파라미터: 파라미터의 타입): 반환값의 타입  {
	return 반환값;
};

함수명(인자);
```

위 코드의 모양처럼 파라미터의 오른쪽에 `: 타입` 을 넣어 입력값의 타입을 정해주고, 함수명 오른쪽에 `: 타입` 을 넣어 함수 내 반환될 값의 타입을 지정해 줄 수 있다.

```tsx
function sayWord(word: string): string {
	return word
}
sayWord('hello'); //hello
sayWord('hello', 'world') //error 발생!
```

타입스크립트에서는 파라미터와 인자의 개수가 다르면 에러가 발생하므로 파라미터의 개수만큼 인자를 넘겨야한다.

### 옵셔널 파라미터

파라미터의 개수만큼 인자를 넘기지 않고 싶을때 사용하는 방법으로 선택적으로 사용하고 싶은 파라미터의 오른쪽에 `?` 를 붙여주면 된다.

```tsx
function sayMyName(firstName: string, lastName?: string): string {
	return 'my name is' + firstName + lastName;
};
sayMyName('yeoning'); //my name is yeoning
```

위 코드처럼 파라미터 `lastName` 에 `?` 를 붙여 옵셔널 파라미터로 정의하면, 함수 호출시 2번째 인자를 넘겨주지 않아도 타입 에러가 발생하지 않는다.