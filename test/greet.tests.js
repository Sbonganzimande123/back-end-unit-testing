import assert from "assert";
import greet from "../greet.js";

describe('Test Greet Function' , function(){
    it('should return "Hello, Sbonga" when called with "Sbonga" ' , function(){
        assert.equal('Hello, Sbonga', greet('Sbonga'));

    });

    it('should return "Hello, Asanda" when called with "Asanda" ' , function(){
        assert.equal('Hello, Asanda', greet('Asanda'));

    });

});