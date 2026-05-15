import { celsiusToFahrenheit } from "../celsius-converter.js";
import { assert } from 'chai';

describe("celsiusToFahrenheit", function() {
    it("should convert 0°C to 32°F", function() { 
        assert.equal(celsiusToFahrenheit(0), 32);
    });
    it("should convert 100°C to 212°F", function() {
        assert.equal(celsiusToFahrenheit(100), 212);
     });
    it("should convert -40°C to -40°F", function() { 
        assert.equal(celsiusToFahrenheit(-40), -40);
    });
     it("should convert 37°C to 98.6°F", function() { 
        assert.equal(celsiusToFahrenheit(37), 98.6);
    });
});