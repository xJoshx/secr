import 'reflect-metadata';
import { Validate } from './validate';

var chai = require('chai');
var expect = chai.expect;

var validate = new Validate();

describe('Testing Email Field', function() {
  it('Should return true if the email is correct', function() {
    const email = {value: 'asdf@asdf.com'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.true;
  });
    it('Should return false if the email is wrong (no @ domain)', function() {
    const email = {value: 'asdf'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.false;
  });
    it('Should return false if the email is wrong (just @ no domain)', function() {
    const email = {value: 'asdf@'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.false;
  });
    it('Should return false if the email is wrong (just ".")', function() {
      const email = {value: 'asdfasdf.'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.false;
  });
  it('Should return false if the email is wrong (just "." and domain)', function() {
    const email = {value: 'asdfasdf.'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.false;
      });
  it('Should return false if the email is wrong (without local part)', function() {
    const email = {value: '@asdfasdf.com'};
    var testCaseEmail = validate.Email(email);
    expect(testCaseEmail).to.be.false;
  });
});

describe('Testing IPV4 validation function', function() {
  it('Should return true with the format nnn.nnn.n.n', function() {
    const ipv4 = {value: '192.168.1.1'};
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return true with the format xxxx:xxxx:xxxx', function() {
    const ipv4 = {value: '2001:0db8:0000:85a3:0000:0000:ac1f:8001'};
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return true with format xxx::x', function() {
    const ipv4 = {value: 'fe00::1'};      
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.true;
  });
    it('Should return false with format nnn.nnn.n.n/nn.nn', function() {
    const ipv4 = {value: '192.168.1.1/12.34'};
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.false;
  });
  it('Should return false with format nnn:nnn:nnn.../', function() {
    const ipv4 = {value: '0000:0000:0000:0000:0000:0000:0000:0000/'};
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.false;
  });
  it('Should return false with format ::nnnn:nnnn:nnnn...::', function() {
    const ipv4 = {value: '::1111:2222:3333:4444:5555:6666::'};
    var testCaseIPV4 = validate.IPV4(ipv4);
    expect(testCaseIPV4).to.be.false;
  }); 
});

describe('Testing IPV6 validation function', function() {
  it('Should return true with full IPv6 address', function() {
    const ipv6 = {value: 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329'};
    var testCaseIPV6 = validate.IPV6(ipv6);
    expect(testCaseIPV6).to.be.true;
  });
  it('Should return true with a collapsed IPv6 address', function() {
    const ipv6 = {value: 'FE80::0202:B3FF:FE1E:8329'};
    var testCaseIPV6 = validate.IPV6(ipv6);
    expect(testCaseIPV6).to.be.true;
  });
  it('Should return false with format xxxx:xxxx:x:xxx/xx', function() {
    const ipv6 = {value: '2001:0DB8:0:CD3/60'};
    var testCaseIPV6 = validate.IPV6(ipv6);
    expect(testCaseIPV6).to.be.false;
  });
  it('Should return false with format xxxx:xxxx::...', function() {
    const ipv6 = {value: '2001:0DB8::CD30/60'};
    var testCaseIPV6 = validate.IPV6(ipv6);
    expect(testCaseIPV6).to.be.false;
  });
});

describe('Testing FQND function', function() {
  it('Should return true with regular FQND', function() {
    const fqnd = {value: 'tumblr.com'};
    var testCaseFQND = validate.FQND(fqnd);
    expect(testCaseFQND).to.be.true;
  });
  it('Should return true with full regular FQND', function() {
    const fqnd = {value: 'www.flipboard.com'};
    var testCaseFQND = validate.FQND(fqnd);
    expect(testCaseFQND).to.be.true;
  });
  it('Should return true with full regular FQND with numbers', function() {
    const fqnd = {value: 'www.111222333.com'};
    var testCaseFQND = validate.FQND(fqnd);
    expect(testCaseFQND).to.be.true;
  });
  it('Should return false with incomplete regular FQND', function() {
    const fqnd = {value: 'sfsfs'};
    var testCaseFQND = validate.FQND(fqnd);
    expect(testCaseFQND).to.be.false;
  });
  it('Should return false with just the domain', function() {
    const fqnd = {value: '.com'};
    var testCaseFQND = validate.FQND(fqnd);
    expect(testCaseFQND).to.be.false;
  });
});

describe('Testing full validation function', function() {
  it('Should return true with regular FQND', function() {
    const site = {value: 'tumblr.com'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.true;
  });
  it('Should return true with regular IPV4', function() {
    const site = {value: '192.168.1.1'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.true;
  });
  it('Should return true with regular IPV6', function() {
    const site = {value: 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.true;
  });  
  it('Should return false with just the domain', function() {
    const site = {value: '.com'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.false;
  });
  it('Should return false with incorrect IPV4', function() {
    const site = {value: '192.168.1.1/12.34'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.false;
  });
  it('Should return false with incorrect IPV6', function() {
    const site = {value: '::1111:2222:3333:4444:5555:6666::'};
    var testCaseFull = validate.Site(site);
    expect(testCaseFull).to.be.false;
  });  
});