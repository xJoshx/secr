import 'reflect-metadata';
import { Validate } from './validate';

const chai = require('chai');
const expect = chai.expect;

const validate = new Validate();

describe('Testing Email Field', function() {
  it('Should return true if the email is correct', function() {
    var testCaseEmail = validate.Email('asdf@asdf.com');
    expect(testCaseEmail).to.be.true;
  });
    it('Should return false if the email is wrong (no @ domain)', function() {
    var testCaseEmail = validate.Email('asdf');
    expect(testCaseEmail).to.be.false;
  });
    it('Should return false if the email is wrong (just @ no domain)', function() {
    var testCaseEmail = validate.Email('asdf@');
    expect(testCaseEmail).to.be.false;
  });
    it('Should return false if the email is wrong (just ".")', function() {
    var testCaseEmail = validate.Email('asdfasdf.');
    expect(testCaseEmail).to.be.false;
  });
  it('Should return false if the email is wrong (just "." and domain)', function() {
    var testCaseEmail = validate.Email('asdfasdf.');
    expect(testCaseEmail).to.be.false;
      });
  it('Should return false if the email is wrong (without local part)', function() {
    var testCaseEmail = validate.Email('@asdfasdf.com');
    expect(testCaseEmail).to.be.false;
  });
});

describe('Testing IPV4 validation function', function() {
  it('Should return true with the format nnn.nnn.n.n', function() {
    var testCaseIPV4 = validate.IPV4('192.168.1.1');
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return true with the format xxxx:xxxx:xxxx', function() {
    var testCaseIPV4 = validate.IPV4('2001:0db8:0000:85a3:0000:0000:ac1f:8001');
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return true with format xxx::x', function() {
    var testCaseIPV4 = validate.IPV4('fe00::1');
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return false with format nnn.nnn.n.n/nn.nn', function() {
    var testCaseIPV4 = validate.IPV4('192.168.1.1/12.34');
    expect(testCaseIPV4).to.be.false;
  });
  it('Should return false with format nnn:nnn:nnn.../', function() {
    var testCaseIPV4 = validate.IPV4('0000:0000:0000:0000:0000:0000:0000:0000/');
    expect(testCaseIPV4).to.be.false;
      });
  it('Should return false with format ::nnnn:nnnn:nnnn...::', function() {
    var testCaseIPV4 = validate.IPV4('::1111:2222:3333:4444:5555:6666::');
    expect(testCaseIPV4).to.be.false;
  }); 
});

describe('Testing IPV6 validation function', function() {
  it('Should return true with full IPv6 address', function() {
    var testCaseIPV6 = validate.IPV6('FE80:0000:0000:0000:0202:B3FF:FE1E:8329');
    expect(testCaseIPV6).to.be.true;
  });
  it('Should return true with a collapsed IPv6 address', function() {
    var testCaseIPV6 = validate.IPV6('FE80::0202:B3FF:FE1E:8329');
    expect(testCaseIPV6).to.be.true;
  });
  it('Should return false with format xxxx:xxxx:x:xxx/xx', function() {
    var testCaseIPV6 = validate.IPV6('2001:0DB8:0:CD3/60');
    expect(testCaseIPV6).to.be.false;
  });
  it('Should return false with format xxxx:xxxx::...', function() {
    var testCaseIPV6 = validate.IPV6('2001:0DB8::CD30/60');
    expect(testCaseIPV6).to.be.false;
  });
});

describe('Testing FQND function', function() {
  it('Should return true with regular FQND', function() {
    var testCaseFQND = validate.FQND("tumblr.com");
    expect(testCaseFQND).to.be.true;
  });
    it('Should return true with full regular FQND', function() {
    var testCaseFQND = validate.FQND("www.flipboard.com");
    expect(testCaseFQND).to.be.true;
  });
  it('Should return true with full regular FQND with numbers', function() {
    var testCaseFQND = validate.FQND("www.111222333.com");
    expect(testCaseFQND).to.be.true;
  });
      it('Should return false with incomplete regular FQND', function() {
    var testCaseFQND = validate.FQND("sfsfs");
    expect(testCaseFQND).to.be.false;
  });
        it('Should return false with just the domain', function() {
    var testCaseFQND = validate.FQND(".com");
    expect(testCaseFQND).to.be.false;
  });
});

describe('Testing full validation function', function() {
  it('Should return true with regular FQND', function() {
    var testCaseFull = validate.validateSite("tumblr.com");
    expect(testCaseFull).to.be.true;
  });
  it('Should return true with regular IPV4', function() {
    var testCaseFull = validate.validateSite("192.168.1.1");
    expect(testCaseFull).to.be.true;
  });
  it('Should return true with regular IPV6', function() {
    var testCaseFull = validate.validateSite("FE80:0000:0000:0000:0202:B3FF:FE1E:8329");
    expect(testCaseFull).to.be.true;
  });  
  it('Should return false with just the domain', function() {
    var testCaseFull = validate.validateSite(".com");
    expect(testCaseFull).to.be.false;
  });
  it('Should return false with incorrect IPV4', function() {
    var testCaseFull = validate.validateSite("192.168.1.1/12.34");
    expect(testCaseFull).to.be.false;
  });
  it('Should return false with incorrect IPV6', function() {
    var testCaseFull = validate.validateSite("::1111:2222:3333:4444:5555:6666::");
    expect(testCaseFull).to.be.false;
  });  
});