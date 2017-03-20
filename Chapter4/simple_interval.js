

/**
 * Created by david on 2017-03-20.
 */

var x = 0, y = 0, z = 0;

function displayValues( vClassify ){
        console.log( "It's %s", vClassify );
        console.log( "X = %d; Y= %d; Z = %d ", x, y, z );
}

function updateX(){
    x += 1;
    displayValues( 'xxx');
}

function updateY(){
    y += 1;
    displayValues( 'yyyyyyyy' );
}

function updateZ(){
    z += 1;
    displayValues( 'zzzzzzzzzzzz');
}

setInterval( updateX, 500 );
setInterval( updateY, 1000 );
setInterval( updateZ, 2000 );

