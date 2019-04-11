# Introduction

  将数值转化为不同进制（ 2-36 ），对正、负数进行转化

# Dependence

  JavaScript:   String.toString( radix )

# Usage

  #### 实例化Convert
  new Convert( number[,digit] ) <br>
  number 为想要转化的数值， digit 是将其转化为多少位的2进制补码数。 默认digit为32位

  #### 将数值根据radix 进行转化。负数将取其补码的进制。 <br>
  Covert.prototype.toString( radix ) <br>
  #### 获取原数值的补码 <br>
  Covert.prototype.getgetcomplementalCode() <br>

```
npm install conversion-base --save

```
```

import Convert from "conversion-base";

let code1 = new Convert( -998244110 );

code1.toString( 16 )  // C48000F2
code1.getComplementalCode() // 11000100100000000000000011110010

let code2 = new Convert( 998244110 );
code2.toString( 16 )  // 3B7FFF0E
code2.getComplementalCode() // 111011011111111111111100001110

let code3 = new Convert( -10 );
code3.toString( 16 )  // FFFFFFF6
code3.getComplementalCode() // 11111111111111111111111111110110

let code4 = new Convert( -10, 8 );
code4.toString( 16 )  // F6
code4.getComplementalCode() // 11110110

```

快速开发的插件。有什么 Bug 或者 建议 请提Issue