
/**
  number: Number,
  radix: Number ( 2 - 36 ),   default 2
  digit: Number   default 32
 */
function Convert( number, digit = 32 ) {
  if ( !_isNumber( number ) ) {

    return new Error( "Params Number Not Is A Number" );

  }

  if ( digit && !_isNumber( digit ) ) {

    return new Error( "Params Digit Not Is A Number" );

  }

  this.number = number;
  this.digit = digit;
  this._finalBinaryStr = "";

  this._init();
}

Convert.prototype.toString = function( radix = 2 ) {
    if ( !_isNumber( radix ) ) {

      return new Error( "Params Radix Not Is A Number" );

    }

    if ( radix < 2 || radix > 36 ) {

      return new Error( "Radix Must be Between 2 and 36" );

    }

    this.radix = radix;

    if ( this.number >= 0 ) {

      return this.number.toString( this.radix ).toUpperCase();

    } else {

      return parseInt( this._finalBinaryStr, 2 ).toString( this.radix ).toUpperCase();

    }
}

Convert.prototype.getComplementalCode = function() {

  return this._finalBinaryStr;

}

Convert.prototype._init = function() {

  if ( this.number >= 0 ) {

    let _binaryStr = this.number.toString( 2 );

    this._finalBinaryStr = this.number.toString( 2 );

  } else {

    const _absNum = Math.abs( this.number );

    let _binaryStr = _absNum.toString(2);
  
    const _binaryStrLength = _binaryStr.length;

    let _digit = _getDigit( _binaryStrLength );


    if ( this.digit && this.digit < _digit ) {

      return new Error( "The Current Set Of Digit Is Less Than The Real Digit." );

    }

    _binaryStr = _binaryStr.padStart( this.digit, 0 );

    let _IntermediateValueArr = _binaryStr.split( "" );

    _IntermediateValueArr = _IntermediateValueArr.map( d => {

      d = d == 0 ? "1" : "0";

      return d;

    } )

    this._finalBinaryStr = ( parseInt( _IntermediateValueArr.join( "" ), 2 ) + 1 ).toString( 2 );
  }
}

function _isNumber( data ) {
  if ( typeof data !== "number" ) {

    return false;

  }

  if ( isNaN( data ) ) {

    return false;

  }
  return true;
}

function _getDigit( value ) {

  if ( !value ) {

    return new Error( "function getDigit Must have Params" );

  }

  let isFound = false;

  let n = 0;

  while( !isFound ) {

    if ( Math.pow( 2, n ) < value && Math.pow( 2, n+1 ) >= value ) {

      isFound = true;

      return Math.pow( 2, n+1 );

    }

    n += 1;

    if ( n >= 10 ) {

      return new Error( `the digit is to larg. ${ Math.pow( 2, n+1 ) }` );

    }

  }

}

exports.Convert = Convert