/**
 * Created by david on 2017-03-20.
 */

var buf256 = new Buffer(256);       // 이것도 되고
// buf256 = new Buffer(256);       // 이것도 된다.
buf256.fill(0);

buf256.write("add some text");
console.log( buf256.toString());

buf256.write("mote text", 9, 9 );   // 버퍼 9번째 칸에 9크기의 스트링을 써넣는다.
console.log( buf256.toString() );

buf256[18] = 43;
console.log( buf256.toString() );